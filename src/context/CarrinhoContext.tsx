import { createContext, ReactNode, useState } from "react";
import Produto from "../model/Produto";
import { useNavigate } from "react-router-dom";

interface CarrinhoContextProps {
    listaCarrinho: Array<Produto>;
    adicionarItem: (produto: Produto) => void;
    diminuirQuantidade: (produto: Produto) => void;
    removerItem: (produto: Produto) => void;
    finalizarCompra: () => void;
}

interface CarrinhoProviderProps {
    children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps);

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
    const [listaCarrinho, setListaCarrinho] = useState<Produto[]>([]);

    function adicionarItem(prod: Produto) {
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

    function diminuirQuantidade(prod: Produto) {
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

    function removerItem(prod: Produto) {
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