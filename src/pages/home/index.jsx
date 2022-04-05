import React, { Component } from "react";
import styles from './index.less'
export default class Index extends Component { 
    constructor(props) { 
        super(props);
    }
    render() { 
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    这是首页的中间部分
                </div>
            </div>
         )
    }
} 