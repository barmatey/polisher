import {useConfirm} from "primevue";

type Callback = () => void | Promise<void>;

export function createDeleteCallback(cb: Callback) {
    const confirm = useConfirm()

    return (event: any) => {
        confirm.require({
            target: event.currentTarget,
            message: 'Are you sure?',
            header: 'Danger zone',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true,
                rounded: true,
            },
            acceptProps: {
                label: 'Delete',
                severity: 'danger',
                rounded: true,
                outlined: true,
            },
            accept: cb,
        })
    }
}


export function createPopupConfirm(cb: Callback) {
    const confirm = useConfirm()

    return (event: any) => {
        confirm.require({
            target: event.currentTarget,
            message: 'Are you sure?',
            rejectProps: {
                label: 'No',
                severity: 'secondary',
                outlined: true
            },
            acceptProps: {
                label: 'Yes'
            },
            accept: cb,
        });
    }


};