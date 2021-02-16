import Drawer from 'react-drag-drawer'
import Styles from '../styles/Drawer.module.css'
import React, {useState} from 'react'
import Button from './Button/index'
import styled from 'styled-components'
import Datepicker from '../components/Datepiker'
import Checkbox from './Checkbox/index'
import { articles } from '../data'
import ReactCodeInput from 'react-verification-code-input';

const DrawerFilter = ({ title, keywords, description, onClose }) => {
    const [open, setOpen] = useState(true)
    const [isActive, setIsActive] = useState(false)
    const [allGeners, setAllGeners] = useState(articles)

    function closeModal() {
        setOpen(!open);
        onClose(true)
    }
    const handleCheckboxChange = id => {
        const newData = [...allGeners]
        // eslint-disable-next-line no-return-assign
        newData.forEach(data => data.id === id ? data.isActive = !data.isActive : data)
        setAllGeners(newData)
    }

    return (
        <Main>
            <Drawer
                modalElementClass={Styles.modal}
                open={open}
                onRequestClose={() => closeModal()}
            >
                <Title>Filter</Title>
                <Wrapper>
                    <WrapperBy>
                        <TitleFilters >By Date</TitleFilters>
                        <Datepicker />
                        <TitleFilters >By Code</TitleFilters>
                        <ReactCodeInput fieldWidth={25} fieldHeight={30} fields={5}/>
                    </WrapperBy>
                    <WrapperBy>
                        <TitleFilters >By Gener</TitleFilters>
                        {allGeners.map((article) =>
                            <Checkbox
                                key={article.id}
                                label={article.title}
                                checked={article.isActive}
                                onChange={e => handleCheckboxChange(article.id)}
                            />
                            )
                        }
                    </WrapperBy>
                </Wrapper>
                <Wrapper>
                    <Button
                        variant={'secondary'}
                        width={'40%'}
                        fontSize={'12px'}
                        onClick={() => closeModal()}
                    >
                        <p>Close</p>
                    </Button>
                    <Button
                        variant={'primary'}
                        width={'40%'}
                        fontSize={'12px'}
                        onClick={() => console.log('olare')}
                    >
                        <p>Filter</p>
                    </Button>
                </Wrapper>
            </Drawer>
        </Main>
    )
}
const Main = styled.div`
    height:60%;
`
const Wrapper = styled.div`
    padding-bottom:20px;
    display: flex;
    justify-content: space-evenly;
`
const WrapperBy = styled.div`
    width:40%;
    max-width:40%;
    height:10%;
`
const Title = styled.text`
   font-size:22px;
   padding:10px;
   font-weight:bold;
   text-align: center;
`

const TitleFilters = styled.text`
   font-size:18px;
   font-weight: bold;
   padding-bottom:25px;
`

export default DrawerFilter