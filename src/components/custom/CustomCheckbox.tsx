import React from 'react';

interface CustomCheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    id,
    label,
    checked,
    onChange,
    disabled = false,
    className = '',
}) => {
    return (
        <div className={`flex items-center ${className}`}>
            <div className="relative" onClick={() => onChange(!checked)}>
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    disabled={disabled}
                    className="peer sr-only"
                />
                <div className={`
                    h-5 w-5 rounded border-2 
                    ${disabled 
                        ? 'border-gray-300 bg-gray-100' 
                        : 'border-primary cursor-pointer'
                    }
                    ${checked 
                        ? 'bg-primary border-primary' 
                        : 'bg-white'
                    }
                    transition-all duration-200
                    peer-focus:ring-2 peer-focus:ring-primary/20
                `}>
                    {checked && (
                        <svg
                            className="h-4 w-4 text-white m-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    )}
                </div>
            </div>
            <label
                htmlFor={id}
                className={`
                    ms-2 font-medium
                    ${disabled 
                        ? 'text-gray-400' 
                        : 'text-gray-700 cursor-pointer'
                    }
                `}
            >
                {label}
            </label>
        </div>
    );
};

export default CustomCheckbox; 