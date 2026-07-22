import { LightningElement, wire } from 'lwc';
import getLeaveRequests from '@salesforce/apex/LeaveController.getLeaveRequests';

const COLUMNS = [
    { label: 'Leave No', fieldName: 'Name' },
    { label: 'Student', fieldName: 'Student_Name__c' },
    { label: 'Student ID', fieldName: 'Student_ID__c' },
    { label: 'Department', fieldName: 'Department__c' },
    { label: 'Leave From', fieldName: 'Leave_From__c', type: 'date' },
    { label: 'Leave To', fieldName: 'Leave_To__c', type: 'date' },
    { label: 'Status', fieldName: 'Status__c' },
    { label: 'Faculty Comment', fieldName: 'Faculty_Comments__c' }
];

export default class LeaveHistory extends LightningElement {

    columns = COLUMNS;
    leaveRequests = [];

    @wire(getLeaveRequests)
    wiredLeaves({ data, error }) {

        if (data) {
            this.leaveRequests = data;
        } else if (error) {
            console.error('Error loading leave requests:', error);
        }

    }

}