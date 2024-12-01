import AMonth from "./Month"
import { Flex } from "antd"
import dayjs from 'dayjs';

interface Props {
    year: number;
}

const onChange = (val: any) => {
    console.log(val)
}

const Year: React.FC<Props> = ({year = 2024}) => {

    const months = Array.from({ length: 12 }, (_, index) => index);
    const computeWeekends = (year: number, month: number) => {
        const weekends = [];
        let date = dayjs(`${year}-${month + 1}-01`);
        while (date.month() === month) {
            if (date.day() === 6 || date.day() === 0) {
                weekends.push(date.format('YYYY-MM-DD'));
            }
            date = date.add(1, 'day');
        }
        return weekends
    };

    const monthCompents = months.map((index) => {
        const holidays = computeWeekends(year, index)
        return (
            <AMonth key={index} year={year} month={index} holidays={holidays} onChange={onChange} />
        )
    })

    return (
        <Flex wrap gap="small">
            {monthCompents}
        </Flex>
    );
}

export default Year;
