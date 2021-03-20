import styled from 'styled-components';
import { color } from '@/theme/global';

export const DetailItemLayout = styled.div`
    min-width: 75px;
    height: 50px;
    padding: 5px;
    background-color: ${color.white};
    color: ${color.black};
`;

export const TypeText = styled.div`
    font-size: 0.8rem;
`;

export const ValueText = styled.div`
    font-size: 1.7rem;
    font-weight: 700;
`;