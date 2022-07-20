import React, { useState } from 'react';
import styles from './sidebar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

import history from '../../assets/images/best_theme/history.png';
import outdoor from '../../assets/images/best_theme/outdoor.png';
import parent_child from '../../assets/images/best_theme/parent_child.png';
import religion from '../../assets/images/best_theme/religion.png';
import scenery from '../../assets/images/best_theme/scenery.png';
import accommodation from '../../assets/images/best_theme/accommodation.png';
import food from '../../assets/images/best_theme/food.png';
import sightseeing from '../../assets/images/best_theme/sightseeing.png';
import useToggle from '../../hook/useToggle';

import Logo from '../Logo/Logo';
const SideBar = () => {
    const { show_wrap_mobile_sidebar, wrap_mobile_sidebar, show_select, transform_icon, destination_select, input_icon, best_topic_text, best_topic, drop_icon, sidebar, serch_input, magnifier, wrap_destination_input, wrap_keyword_input } = styles;
    const [selectValue, selectValueFunction] = useToggle(false);
    const [logoValue, logoValueFunction] = useToggle(false);
    console.log(logoValue);
    return (
        <div className={sidebar}>
            <Logo logoValueFunction={logoValueFunction} />
            <div className={`${wrap_mobile_sidebar} ${logoValue ? show_wrap_mobile_sidebar : null}`}>
                <div className={wrap_destination_input}>
                    <button className={serch_input}>
                        <span>
                            目的地
                        </span>
                    </button>
                    {/* <input className={serch_input} type="text" placeholder='目的地' /> */}
                    <FontAwesomeIcon
                        size="xl"
                        icon={faCircleChevronDown}
                        className={`${drop_icon} ${input_icon} ${selectValue ? transform_icon : null}`}
                        onClick={selectValueFunction}
                    />
                </div>
                <div className={`${destination_select} ${selectValue ? show_select : null}`}>
                    <button>
                        基隆
                    </button>
                    <button>
                        台北
                    </button>
                    <button>
                        新北
                    </button>
                    <button>
                        桃園
                    </button>
                    <button>
                        新竹
                    </button>
                    <button>
                        苗栗
                    </button>
                    <button>
                        台中
                    </button>
                    <button>
                        彰化
                    </button>
                    <button>
                        雲林
                    </button>
                    <button>
                        南投
                    </button>
                    <button>
                        嘉義
                    </button>
                </div>



                <div className={wrap_keyword_input}>
                    <input className={serch_input} type="text" placeholder='搜尋關鍵字' />
                    <div className={`${magnifier} ${input_icon}`}></div>
                </div>

                <h2 className={best_topic_text}>精選主題</h2>
                <ul className={best_topic}>
                    <li>
                        <div>
                            <img src={history} alt="history theme" />
                        </div>
                        <span>
                            歷史文化
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={outdoor} alt="outdoor" />
                        </div>
                        <span>
                            戶外踏青
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={religion} alt="religion" />
                        </div>
                        <span>
                            宗教巡禮
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={parent_child} alt="parent child" />
                        </div>
                        <span>
                            親子活動
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={scenery} alt="scenery" />
                        </div>
                        <span>
                            風景區
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={food} alt="food" />
                        </div>
                        <span>
                            美食品嘗
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={accommodation} alt="accommodation" />
                        </div>
                        <span>
                            住宿推薦
                        </span>
                    </li>

                    <li>
                        <div>
                            <img src={sightseeing} alt="sightseeing" />
                        </div>
                        <span>
                            觀光活動
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar