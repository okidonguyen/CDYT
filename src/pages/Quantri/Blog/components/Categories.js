
import React, { useState, useEffect, useRef } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import { MultiSelect } from 'primereact/multiselect';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

const MultiSelectDemo = (props) => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCities1, setSelectedCities1] = useState(null);
    const [selectedCities2, setSelectedCities2] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCities, setSelectedGroupedCities] = useState(null);
    const [selectedItems1, setSelectedItems1] = useState(null);
    const [selectedItems2, setSelectedItems2] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i })));
    const loadLazyTimeout = useRef(null);

    const categories = [
        {id: 1, title: "cat 1"},
        {id: 2, title: "cat 2"},
        {id: 3, title: "cat 3"},
        {id: 4, title: "cat 4"},
        {id: 5, title: "cat 5"},
    ];

    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    const onSelectedChange = (value) => {
        setSelectedItems(value);
        props.onSelectedItems(value)
    }

    return (
        <div>
            <MultiSelect 
                value={selectedItems} 
                options={categories} 
                onChange={(e) => onSelectedChange(e.value)} 
                optionLabel="title" 
                className="w-100"
             />
        </div>  
    );
}

export default MultiSelectDemo;
                 