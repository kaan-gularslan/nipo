import { useState, useMemo } from "react";
import { Check, ChevronRight, RotateCcw, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type CustomizationNode, type CustomizationOption, getCustomizationTree } from "@/data/customization";
import { formatPrice } from "@/data/products";

interface Selection {
  nodeId: string;
  nodeLabel: string;
  optionId: string;
  optionLabel: string;
  priceModifier: number;
}

interface ProductCustomizerProps {
  categoryId: string;
  basePrice: number;
  onCustomizationChange?: (selections: Selection[], finalPrice: number) => void;
}

const ProductCustomizer = ({ categoryId, basePrice, onCustomizationChange }: ProductCustomizerProps) => {
  const tree = getCustomizationTree(categoryId);
  const [selections, setSelections] = useState<Selection[]>([]);

  // Walk the tree based on current selections to find current node
  const currentPath = useMemo(() => {
    if (!tree) return [];
    const path: { node: CustomizationNode; depth: number }[] = [{ node: tree, depth: 0 }];
    let current = tree;

    for (const sel of selections) {
      if (current.children && current.children[sel.optionId]) {
        current = current.children[sel.optionId];
        path.push({ node: current, depth: path.length });
      } else {
        break;
      }
    }
    return path;
  }, [tree, selections]);

  const currentNode = currentPath[currentPath.length - 1]?.node;
  const isComplete = currentNode && !currentNode.children;

  // Calculate final price
  const finalPrice = useMemo(() => {
    let price = basePrice;
    for (const sel of selections) {
      price *= sel.priceModifier;
    }
    return price;
  }, [basePrice, selections]);

  if (!tree) return null;

  const handleSelect = (node: CustomizationNode, option: CustomizationOption, depth: number) => {
    const newSelections = [
      ...selections.slice(0, depth),
      {
        nodeId: node.id,
        nodeLabel: node.label,
        optionId: option.id,
        optionLabel: option.label,
        priceModifier: option.priceModifier || 1,
      },
    ];
    setSelections(newSelections);

    // Calculate price for callback
    let price = basePrice;
    for (const sel of newSelections) {
      price *= sel.priceModifier;
    }
    onCustomizationChange?.(newSelections, price);
  };

  const handleReset = () => {
    setSelections([]);
    onCustomizationChange?.([], basePrice);
  };

  return (
    <div className="bg-card rounded-2xl border border-border/60 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 bg-muted/30 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-nipo-pink-light flex items-center justify-center">
            <Palette className="w-4 h-4 text-secondary" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">Ürünü Kişiselleştir</h3>
            <p className="text-[10px] text-muted-foreground">Seçimleriniz sonraki adımları belirler</p>
          </div>
        </div>
        {selections.length > 0 && (
          <button onClick={handleReset} className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-destructive transition-smooth">
            <RotateCcw className="w-3 h-3" />
            Sıfırla
          </button>
        )}
      </div>

      <div className="p-5">
        {/* Tree visualization */}
        <div className="relative">
          {currentPath.map(({ node, depth }) => {
            const selectedOption = selections[depth];
            const isCurrentLevel = depth === selections.length;
            const isPastLevel = depth < selections.length;

            return (
              <div key={`${node.id}-${depth}`} className="relative">
                {/* Connector line */}
                {depth > 0 && (
                  <div className="absolute -top-3 left-5 w-px h-3 bg-border" />
                )}

                {/* Branch node */}
                <div className={`mb-4 ${depth > 0 ? "ml-4 pl-4 border-l-2 border-border/40" : ""}`}>
                  {/* Node label */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      isPastLevel ? "bg-primary text-primary-foreground" :
                      isCurrentLevel ? "bg-secondary text-secondary-foreground animate-badge-pulse" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {isPastLevel ? <Check className="w-3 h-3" /> : depth + 1}
                    </div>
                    <span className={`text-xs font-bold ${isPastLevel || isCurrentLevel ? "text-foreground" : "text-muted-foreground"}`}>
                      {node.label}
                    </span>
                    {isPastLevel && selectedOption && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-nipo-blue-light text-primary text-[10px] font-semibold">
                        <ChevronRight className="w-2.5 h-2.5" />
                        {selectedOption.optionLabel}
                      </span>
                    )}
                  </div>

                  {node.description && isCurrentLevel && (
                    <p className="text-[10px] text-muted-foreground mb-3 ml-8">{node.description}</p>
                  )}

                  {/* Options — show only for current level or animate collapse for past */}
                  {isCurrentLevel && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-8 animate-fade-up">
                      {node.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleSelect(node, option, depth)}
                          className="group flex items-start gap-3 p-3 rounded-xl border border-border/60 bg-background hover:border-primary/40 hover:shadow-nipo-card transition-smooth text-left"
                        >
                          <span className="text-lg shrink-0 mt-0.5">{option.icon || "•"}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-smooth">{option.label}</div>
                            {option.description && (
                              <div className="text-[10px] text-muted-foreground mt-0.5">{option.description}</div>
                            )}
                          </div>
                          {option.priceModifier && option.priceModifier !== 1 && (
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                              option.priceModifier < 1
                                ? "bg-nipo-green-light text-accent"
                                : "bg-nipo-pink-light text-secondary"
                            }`}>
                              {option.priceModifier < 1
                                ? `-${Math.round((1 - option.priceModifier) * 100)}%`
                                : `+${Math.round((option.priceModifier - 1) * 100)}%`
                              }
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary when complete */}
        {isComplete && selections.length > 0 && (
          <div className="mt-4 p-4 rounded-xl bg-nipo-blue-light/50 border border-primary/10 animate-scale-in">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary">Kişiselleştirme Tamamlandı</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {selections.map((sel, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-card border border-border/40 text-[10px] font-medium text-foreground">
                  <span className="text-muted-foreground">{sel.nodeLabel}:</span> {sel.optionLabel}
                </span>
              ))}
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-muted-foreground">Kişiselleştirilmiş Birim Fiyat:</span>
              <span className="text-lg font-black text-primary">{formatPrice(finalPrice)}</span>
            </div>
          </div>
        )}

        {/* Progress bar */}
        {!isComplete && (
          <div className="mt-4 flex items-center gap-2">
            {currentPath.map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-muted">
                <div className={`h-full rounded-full transition-all duration-500 ${
                  i < selections.length ? "bg-primary w-full" :
                  i === selections.length ? "bg-secondary w-1/2 animate-shimmer" :
                  "w-0"
                }`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCustomizer;
