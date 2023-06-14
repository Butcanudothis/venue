'use-client';
import { useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import queryString from "query-string";
import { useCallback } from "react";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(
      () => {
        let currentQuery = {};
        if (params) {
            currentQuery = queryString.parse(params.toString());
        }
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }
        if(params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = queryString.stringifyUrl({
            url:'/',
            query: updatedQuery
        },{
            skipNull: true,
        });
        router.push(url);
        },
        [router, params, label],
    );

    return (
        <div onClick={handleClick}
        className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'text-neutral-800 border-b-neutral-800' : 'text-neutral-500 border-transparent'}`}>
            <Icon size= {26} />
            <div className= "font-medium text-sm">
            {label}
            </div>
        </div>
    );
}

export default CategoryBox;