import React from 'react'
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const CommonForm = ({ formControls , formData , setFormData, onSubmit ,buttonText}) => {

    const renderInputsByComponentType = (controlItem ) => {
        let element = null;
        let value = formData[controlItem.name] || '';
        switch (controlItem.componentType) {
            case 'input':
                 element = (<Input
                    className='mb-2 placeholder:text-sm placeholder:text-slate-500'
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    id={controlItem.name}
                    type={controlItem.type}
                    value = {value}
                    onChange = {e => setFormData({ ...formData, [controlItem.name] : e.target.value })}
                />)
                break;

            case 'textarea':
                 element =  (<Textarea
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    id={controlItem.id}
                    value={value}
                    onChange = {e => setFormData({ ...formData, [controlItem.name] : e.target.value })}
                />)
                break;
            case 'select':
                 element = (
                    <Select onValueChange={value => setFormData({ ...formData, [controlItem.name] : value })} value={value}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={controlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                controlItem.options &&
                                controlItem.options.map(optionItem => <SelectItem
                                    key={optionItem.id}
                                    value={optionItem.id}>
                                    {optionItem.label}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>

                    
                )
                break;
            default:
                element = (<Input
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    id={controlItem.name}
                    type={controlItem.type}
                    value = {value}
                    onChange = {e => setFormData({ ...formData, [controlItem.name] : e.target.value })}
                />)
                break;
        }

        return element;
    }
    return (
        <form onSubmit = {onSubmit}>
            <div className='flex flex-col gap-3'>
                {formControls.map(controlItem => <div key={controlItem.name} className='grid w-full gap-1.5'>
                    <Label className="mb-1" >{controlItem.label}</Label>
                    {
                        renderInputsByComponentType(controlItem)
                    }
                </div>)}
            </div>
            <Button type='submit' className='w-full mt-2'>{buttonText || 'Submit'}</Button>
        </form>
    )
}

export default CommonForm