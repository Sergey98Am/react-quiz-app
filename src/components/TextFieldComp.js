import {Box, FormControl, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {handleAmountChange} from "../redux/actions";

const TextFieldComp = () => {

    const dispatch = useDispatch();
    const handlechange = (e) => {
        dispatch(handleAmountChange(e.target.value))
    }

    return (
        <Box mt={3} width='100%'>
            <FormControl fullWidth>
                <TextField
                    onChange={handlechange}
                    variant='outlined'
                    label='Amount of Questions'
                    type='number'
                    size='small'
                />
            </FormControl>
        </Box>
    )
}

export default TextFieldComp;