import React, { Component } from "react";
import styles from './index.less'
import Calculator from "./components/Calculator";
export default class Index extends Component { 
    constructor(props) { 
        super(props);
    }
    render() { 
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    这是首页的中间部分 我笑了
                </div>
                <div className="template-box">
                <Calculator></Calculator>
                </div>
            </div>
         )
    }
} 