import React from "react";
import 'features/admin/style/AdminMenu.scss'
import { BarChart, BarData, LineChart, LineData, LogChart, PieChart, PieData } from "features/admin";




export default function AdminMenu() {
    return (
        <div class="ct" id="t1">
            <div class="ct" id="t2">
                <div class="ct" id="t3">
                    <div class="ct" id="t4">
                        <div class="ct" id="t5">
                            <ul id="menu">
                                <a href="/admin/admin#t1"><li class="icon fa fa-home fa-2x " id="fa"></li></a>
                                <a href="/admin/admin#t2"><li class="icon fa fa-question fa-2x" id="fa"></li></a>
                                <a href="/admin/admin#t3"><li class="icon fa fa-rocket fa-2x" id="fa"></li></a>
                                <a href="/admin/admin#t4"><li class="icon fa fa-dribbble fa-2x" id="fa"></li></a>
                    
                            </ul>
                            <div class="page" id="p1">
                                <section class="fa fa-home fa-3x"><h1>admin Page</h1></section>
                            </div>
                            <div class="page" id="p2">
                                <section class="icon"><div class="adminDiv"><BarChart data= {BarData}/></div></section>
                            </div>
                            <div class="page" id="p3">
                                <section class="icon fa fa-rocket"><span class="title">Rocket</span></section>
                            </div>
                            <div class="page" id="p4">
                                <section class="icon fa fa-dribbble">
                                    <span class="title">Dribbble</span>
                                    <p class="hint">
                                        <a href="https://dribbble.com/hrtzt" target="_blank">Im ready to play, <span class="hint line-trough">invite me </span> find me</a>
                                    </p>
                                    <p class="hint">Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

