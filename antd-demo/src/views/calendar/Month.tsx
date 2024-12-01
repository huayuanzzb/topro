import { Calendar, Typography, CalendarProps } from 'antd';
import { SelectInfo } from 'antd/es/calendar/generateCalendar';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

interface Props {
    year: number;
    month: number;
    holidays: string[];
    onChange: any;
}


const monthStyle: React.CSSProperties = {
    width: 300,
};


const Month: React.FC<Props> = ({ year, month, holidays, onChange }) => {

    const workdayStyle: React.CSSProperties = {
        backgroundColor: 'green',
    };

    const holidayStyle: React.CSSProperties = {
        backgroundColor: 'red',
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current) => {
        debugger
        if (current.month() !== month) {
            return null;
        }
        return (
            <div style={holidays?.includes(current.format('YYYY-MM-DD')) ? holidayStyle : workdayStyle}>
                {current.date()}
            </div>
        );
    };

    const onSelect = (date: dayjs.Dayjs, { source }: SelectInfo) => {
        const d = date.format('YYYY-MM-DD')
        if (holidays?.includes(d)) {
            holidays = holidays.filter(i => i !== d)
        } else {
            holidays.push(d)
        }
        onChange(holidays)
    }

    return (

        <div style={monthStyle}>
            <Calendar
                fullscreen={false}
                mode='month'
                value={dayjs().year(year).month(month)}

                defaultValue={undefined}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                    return (
                        <Typography.Title level={4}>{month + 1}月</Typography.Title>
                    )
                }}
                fullCellRender={cellRender}
                onSelect={onSelect}
            />
        </div>
    )
}

export default Month;
