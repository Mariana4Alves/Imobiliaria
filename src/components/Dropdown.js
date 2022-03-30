import { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';

const Pressable = styled.div`
    justify-content: space-between;
    cursor: pointer;
    width: fit-content;
    -webkit-box-shadow: 0px 0px 6px -3px #999999; 
    box-shadow: 0px 0px 6px -3px #999999;
    padding: 8px;
    padding-left: 12px;
    padding-bottom: 4px;

    align-items: center;
    border-radius: 20px;
    background: rgb(34, 133, 253);
`;

const Title = styled.h3`
    font-family: 'Khula', sans-serif;
    padding-bottom: 12px;
    margin: 0;
    font-size: 14px;
    color: rgb(146,146,146);
    ${(props) => props.hasNotMargin && `padding-bottom: 0px; color: #fff;`}
    ${(props) => props.activeOption && `margin-top: 12px;`}

`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`;

const OpenDropdown = styled.div`
    padding: 12px;

    -webkit-box-shadow: 0px 0px 6px -3px #999999; 
    box-shadow: 0px 0px 6px -3px #999999;
    align-items: center;
    border-radius: 20px;
    position: absolute;
    z-index: 99;
    overflow: hidden;
`;

const OptionItem = styled.div`
    cursor: pointer;
`;

/*
    options {
        title
        onClick
    }
*/

const Dropdown = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeOption, setActiveOption] = useState(undefined);
    return (
        <div style={{ width: 'fit-content' }}>
            <Pressable onClick={() => setIsOpen(!isOpen)}>
                <Flex>
                    <Title hasNotMargin>{title}</Title>
                    <BiChevronDown style={{ marginTop: 2, marginLeft: 4 }} color="#fff" />
                </Flex>
            </Pressable>
           
                <Title activeOption>{activeOption}</Title>
            
            {isOpen && (
                <OpenDropdown>
                    {options.map((option, index) => {
                        return (
                            <OptionItem onClick={() => { setActiveOption(option.title); option.onClick(index); setIsOpen(false); }}>
                                <Title>{option.title}</Title>
                            </OptionItem>
                        )
                    })}
                </OpenDropdown>


            )}
        </div>
    )
}

export default Dropdown;