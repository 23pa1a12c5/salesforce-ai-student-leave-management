import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createLeaveRequest from '@salesforce/apex/LeaveController.createLeaveRequest';

export default class LeaveRequestForm extends LightningElement {

    studentName = '';
    studentId = '';
    email = '';
    department = '';
    year = '';
    leaveFrom = '';
    leaveTo = '';
    reason = '';

    departmentOptions = [
        { label: 'CSE', value: 'CSE' },
        { label: 'IT', value: 'IT' },
        { label: 'ECE', value: 'ECE' },
        { label: 'EEE', value: 'EEE' },
        { label: 'MECH', value: 'MECH' },
        { label: 'CIVIL', value: 'CIVIL' }
    ];

    yearOptions = [
        { label: '1st Year', value: '1st Year' },
        { label: '2nd Year', value: '2nd Year' },
        { label: '3rd Year', value: '3rd Year' },
        { label: '4th Year', value: '4th Year' }
    ];

    handleStudentName(event) {
        this.studentName = event.target.value;
    }

    handleStudentId(event) {
        this.studentId = event.target.value;
    }

    handleEmail(event) {
        this.email = event.target.value;
    }

    handleDepartment(event) {
        this.department = event.detail.value;
    }

    handleYear(event) {
        this.year = event.detail.value;
    }

    handleLeaveFrom(event) {
        this.leaveFrom = event.target.value;
    }

    handleLeaveTo(event) {
        this.leaveTo = event.target.value;
    }

    handleReason(event) {
        this.reason = event.target.value;
    }

    submitLeave() {

        createLeaveRequest({
            studentName: this.studentName,
            studentId: this.studentId,
            email: this.email,
            department: this.department,
            year: this.year,
            leaveFrom: this.leaveFrom,
            leaveTo: this.leaveTo,
            reason: this.reason
        })
        .then(() => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Leave Request Submitted Successfully',
                    variant: 'success'
                })
            );

            this.studentName = '';
            this.studentId = '';
            this.email = '';
            this.department = '';
            this.year = '';
            this.leaveFrom = '';
            this.leaveTo = '';
            this.reason = '';

        })
        .catch(error => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );

        });

    }

}