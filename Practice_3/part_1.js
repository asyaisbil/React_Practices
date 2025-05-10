import { useEffect } from "react";

/*Sadece component DOM’a eklendiğinde konsola Çalıştı! yazdıracak kodu yaz.*/


useEffect(() => {
 console.log("Çalıştı!");
}, [])



/* Component'e parent'ından gelen id  ve category propları değiştiğinde konsola id/category güncellendi! yazdıracak kodu yaz.*/ 

useEffect(() => {
    console.log("id/category güncellendi!")
}, [id, category])


/*
Categories component'i mount olduğunda https://api.example.com/category adresine get isteği atıp aldığı response'da gelen veriyi(data) categories state'ine ekleyen kodu yaz. - İpucu: import'ları unutma

import {useState} from 'react';
import CatergoryList from './CatergoryList.js';


export default function Categories () {
 const [categories, setCategories] = useState([]);


 return (
   <CatergoryList categories={categories} />
 )
}
*/

import {useState, useEffect} from 'react';
import CatergoryList from './CatergoryList.js';
import axios from 'axios';

export default function Categories () {
 const [categories, setCategories] = useState([]);

 useEffect(() => {
    axios
    .get("https://api.example.com/category")
    .then(response => setCategories(response.data))
    .catch(error => console.log(error));
 }, [])

 return (
   <CatergoryList categories={categories} />
 )
}