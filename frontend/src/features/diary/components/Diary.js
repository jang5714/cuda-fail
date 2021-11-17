import React, { useEffect, useState } from "react";
import sunny from 'features/diary/images/sunny.png'
import diary from 'features/diary/images/a.png'
import left from 'features/diary/images/left.png'
import right from 'features/diary/images/right.png'
import sketch from 'features/diary/images/sketch.png'
import "features/common/font/font.scss"
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {LayOut} from 'features/common'
import 'features/diary/style/Diary.scss'


export default function Diary() {
    const [test, setTest] = useState(new Date())
    const today = new Date()
    const dateToString = (day) => day.toISOString().substring(0,10)
    return(
        <LayOut>
            <div class="diary_wrapper">
            <div class="diary_container">
            <div style={{width:'500px', float:'left'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={test}
                maxDate={today}
                onChange={(newValue) => {
                setTest(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            </div>
            <Div>
            {/* <h1>Diary test</h1> */}
        
                
                    
                    {/* <label><input type="date" id="start" value={dateToString(test)} max={dateToString(today)}/></label> */}
                    <button onClick={() => setTest(today)}>오늘 바로 가기 </button>
                    <table border='1px' style={{width:'100%', margin:'auto', padding:'10em', borderCollapse:'collapse', borderRadius:'30px'}}>
                        <tr>
                            <td style={{width:'15%'}}><img class='diary-img' src={left} onClick={()=> setTest(new Date(test.setDate(test.getDate()-1)))}/></td>
                            <td style={{width:'50%'}}><DiarySmallText>{test.toLocaleString('ko-KR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        weekday:'long'})}</DiarySmallText></td> 
                            <td style={{width:'20%'}}><DiarySmallText>날씨는 맑음 !</DiarySmallText><img class='diary-img' src={sunny}/></td>
                            <td style={{width:'15%'}}>{test.toISOString().substring(0, 10) < today.toISOString().substring(0, 10) 
                                ? <img class='diary-img' src={right} onClick={()=> setTest(new Date(test.setDate(test.getDate()+1)))}/>
                                :<></>}</td>
                        </tr>
                        <tr>
                            <td colSpan='4'><DiarySmallText>제목 : 안주현의 그림 일기</DiarySmallText></td>
                        </tr>
                        <tr>
                            <td colSpan='4'><img class='diary-img' src={diary}/></td>
                        </tr>
                        <tr>
                            <td colSpan='4'><DiaryText>안녕하세오. 안주현이에오 이건 그림일기에오</DiaryText></td>
                        </tr>
                    </table>
                
    
    </Div>
    </div>
    </div>
    </LayOut>)
}

const DiaryText = styled.div`
    font-family: 'UhBeeRami';
    font-size: 20px;
    font-weight: bold;
`
const DiarySmallText = styled.div`
    font-family: 'UhBeeRami';
    font-size: 10px;
    font-weight: bold;
`
const Div = styled.div`
    text-align: center;
    float:right;
`