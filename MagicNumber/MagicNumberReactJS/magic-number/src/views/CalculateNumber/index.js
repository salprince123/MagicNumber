import { Card, DatePicker } from "antd";
import { Button } from "antd/lib/radio";
export const CalculateNumber = ()=>
{
    return(
        <>
            <DatePicker name="datepicker" style={{
                    position: 'absolute', left: '50%', top: '15%',
                    transform: 'translate(-50%, -50%)'
                                } 
                    }
                    format="DD/MM/YYYY"
                    />
                    <Button type="primary"  shape="round"  size="large"
                    style={{
                        position: 'absolute', left: '50%', top: '20%',
                        transform: 'translate(-50%, -50%)'
                                    }}
                    >
                    Submit
                    </Button>
        </>
    );
}