import React, { useState, useEffect } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import { MultiSelect } from 'primereact/multiselect';
// import { Skeleton } from 'primereact/skeleton';
// import { classNames } from 'primereact/utils';
import axios from 'axios';

const MultiSelectDemo = (props) => {
    const host = 'http://localhost:3001';
    // const [lazyItems, setLazyItems] = useState([]);
    // const [lazyLoading, setLazyLoading] = useState(false);
    // const [selectedCities1, setSelectedCities1] = useState(null);
    // const [selectedCities2, setSelectedCities2] = useState(null);
    // const [selectedCountries, setSelectedCountries] = useState(null);
    // const [selectedGroupedCities, setSelectedGroupedCities] = useState(null);
    // const [selectedItems1, setSelectedItems1] = useState(null);
    // const [selectedItems2, setSelectedItems2] = useState(null);
    // const [selectAll, setSelectAll] = useState(false);
    // const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i })));
    // const loadLazyTimeout = useRef(null);

    const [selectedItems, setSelectedItems] = useState([]);
    const [options, setOptions] = useState([]);

    const getCategories = () => {
        axios
            .get(`${host}/api/admin/categories`)
            .then((response) => response)
            .then(({ data: res }) => {
                if (res?.success) {
                    const cats = res?.data?.map(({ id, title }) => ({
                        id: id,
                        title: title,
                    }));
                    setOptions(cats);
                }
            })
            .catch((err) => {
                console.log('Lỗi kết nối server!');
            });
    };

    useEffect(() => {
        getCategories();
    }, []);

    const onSelectedChange = (value) => {
        setSelectedItems(value);
        props.onSelectedItems(value);
    };

    const resetValue = () => {
        setSelectedItems(props.value);
    };

    useEffect(() => resetValue());

    return (
        <div>
            <MultiSelect
                value={selectedItems}
                options={options}
                onChange={(e) => onSelectedChange(e.value)}
                optionLabel="title"
                className="w-100"
                placeholder="Chọn danh mục"
            />
        </div>
    );
};

export default MultiSelectDemo;
