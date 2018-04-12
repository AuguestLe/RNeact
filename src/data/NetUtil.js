'use strict';
import React, { Component } from 'react';
const HOSTURL ='http://192.168.0.140:8199';
let token ='';
let header = {
    'Accept': 'application/json',//josn形式、
    'Content-Type': 'application/x-www-form-urlencoded,application/json'   
}
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
export default class NetUtil extends Component {
    static get(url,params,callback){
        if(params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key+'='+params[key]))
            if(url.search(/\?/)=== -1){
                url+='?'+ paramsArray.join('&')
            } else{
                url += '&' + paramsArray.join('&')
            }
        }
        fetch(HOSTURL+url,{
            method:'GET'
        })
        .then((response) => response.json())
        .then((responseJSON) =>{
            callback(responseJSON)
        })
    }
    static post(url,params,callback){
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key+'='+params[key]))
        let str = paramsArray.join('&');
        fetch(HOSTURL+url,{
            method: 'POST', 
            headers:header,
            body:str
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            callback(responseJSON)
        })
        .catch((error) =>{
            console.log('error');
        })
         
    }


  

}