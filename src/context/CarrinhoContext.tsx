import { createContext, ReactNode, useState } from "react";

interface Produtos {
    id: number;
    nome: string;
    qtd?: number;
}

interface CarrinhoContextProps {
    listaCarrinho: Array<Produtos>;
    adicionarItem: (produto: Produtos) => void;
    diminuirQuantidade: (produto: Produtos) => void;
    removerItem: (produto: Produtos) => void;
    finalizarCompra: () => void;
}

interface CarrinhoProviderProps {
    children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps);

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
    const [listaCarrinho, setListaCarrinho] = useState<Produtos[]>([]);

    function adicionarItem(prod: Produtos) {
        setListaCarrinho((currentItems) => {
            if (currentItems.find((item) => item.id === prod.id) == null) {
                return [...currentItems, { ...prod, qtd: 1 }];
            } else {
                return currentItems.map((item) => {
                    if (item.id === prod.id) {
                        return { ...item, qtd: (item.qtd || 0) + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function diminuirQuantidade(prod: Produtos) {
        setListaCarrinho((currentItems) => {
            if (currentItems.find((item) => item.id === prod.id)?.qtd === 1) {
                return currentItems.filter((item) => item.id !== prod.id);
            } else {
                return currentItems.map((item) => {
                    if (item.id === prod.id) {
                        return { ...item, qtd: (item.qtd || 0) - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removerItem(prod: Produtos) {
        setListaCarrinho((currentItems) => {
            return currentItems.filter((item) => item.id !== prod.id);
        });
    }

    function finalizarCompra() {
        setListaCarrinho([]);
    }

    return (
        <CarrinhoContext.Provider
            value={{
                listaCarrinho,
                adicionarItem,
                diminuirQuantidade,
                removerItem,
                finalizarCompra,
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}