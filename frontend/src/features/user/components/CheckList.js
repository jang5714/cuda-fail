import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import 'features/user/style/Check.scss'
// userjoin 페이지 아래 추가
export default function Cheacklist() {
    return (<div>
        <input id="modalToggle" class="hide" type="checkbox" />
        <section class="modal">
            <label class="check btn-open" for="modalToggle">Check List</label>

            <div class="inside">
                <label class="btn-close" for="modalToggle">X</label>
                <div>
                <h1>Check List 작성하기</h1>
                <form >
                    <label component="legend">What's your Job?</label>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="teacher" control={<Radio />} label="teacher" />
                        <FormControlLabel value="doctor" control={<Radio />} label="doctor" />
                        <FormControlLabel value="student" control={<Radio />} label="student" />
                        <FormControlLabel value="companyman" control={<Radio />} label="companyman" />
                        <FormControlLabel value="developer" control={<Radio />} label="developer" />
                    </RadioGroup>
                <FormControl >
                    <label component="legend">What are you interested in?</label>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="exercise" control={<Radio />} label="exercise" />
                        <FormControlLabel value="diet" control={<Radio />} label="diet" />
                        <FormControlLabel value="movie" control={<Radio />} label="movie" />
                        <FormControlLabel value="book" control={<Radio />} label="book" />
                        <FormControlLabel value="computergame" control={<Radio />} label="computergame" />
                    </RadioGroup>
                </FormControl>
                </form>
            </div>
            </div>
        </section>
    </div>
    )
}