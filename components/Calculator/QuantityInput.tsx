import {FC, ChangeEvent} from 'react';

export type QuantityInputProps = {
    quantity: string;
    handleQuantityChange: (e: ChangeEvent<HTMLInputElement> | {target: {value: string}}) => void
}

export const QuantityInput: FC<QuantityInputProps> = ({quantity, handleQuantityChange}) => {

    const handleClickMinus = () => {
        handleQuantityChange({
                target: {
                    value: `${parseInt(quantity) - 1}`
                }
            }
        );
    }

    const handleClickPlus = () => {
        handleQuantityChange({
                target: {
                    value: `${parseInt(quantity) + 1}`
                }
            }
        );
    }

    return (
        <div className="quantity-input-container">
            <button onClick={handleClickMinus} className={`${+quantity <= 1 ? "opacity-[0.5]" : ""} mr-[10px]`}>  
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="27"
                    fill="none"
                    viewBox="0 0 15 27"
                    >
                    <path
                        d="M2.972 1.015L14.62 12.54c.138.137.236.285.293.446.058.16.087.331.087.514s-.029.354-.087.514c-.057.16-.155.31-.293.446L2.972 26.02c-.322.32-.725.48-1.21.48-.483 0-.898-.172-1.244-.515-.345-.343-.518-.743-.518-1.2 0-.457.173-.858.518-1.2L10.68 13.5.518 3.416a1.601 1.601 0 01-.483-1.183c0-.47.172-.875.518-1.218C.899.672 1.302.5 1.763.5c.46 0 .864.172 1.21.515z"
                    ></path>
                </svg>
            </button>
            <input type="text" value={quantity} onChange={handleQuantityChange} className="quantity-input text-center" size={7} />
            <button onClick={handleClickPlus} className={`${+quantity >= 9999 ? "opacity-[0.5]" : ""} ml-[10px]`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="27"
                    fill="none"
                    viewBox="0 0 15 27"
                    >
                    <path
                        d="M2.972 1.015L14.62 12.54c.138.137.236.285.293.446.058.16.087.331.087.514s-.029.354-.087.514c-.057.16-.155.31-.293.446L2.972 26.02c-.322.32-.725.48-1.21.48-.483 0-.898-.172-1.244-.515-.345-.343-.518-.743-.518-1.2 0-.457.173-.858.518-1.2L10.68 13.5.518 3.416a1.601 1.601 0 01-.483-1.183c0-.47.172-.875.518-1.218C.899.672 1.302.5 1.763.5c.46 0 .864.172 1.21.515z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}
