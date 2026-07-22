import { LightningElement, wire } from 'lwc';

import getLeaveRequests from '@salesforce/apex/LeaveController.getLeaveRequests';
import approveLeave from '@salesforce/apex/LeaveController.approveLeave';
import rejectLeave from '@salesforce/apex/LeaveController.rejectLeave';

import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FacultyDashboard extends LightningElement {

    leaveRequests = [];
    wiredResult;
    comments = {};

    // Dashboard Counters
    totalRequests = 0;
    pendingCount = 0;
    approvedCount = 0;
    rejectedCount = 0;

    @wire(getLeaveRequests)
    wiredLeaves(result) {

        this.wiredResult = result;

        if (result.data) {

            this.leaveRequests = result.data.map(item => ({
                ...item,
                isPending: item.Status__c === 'Pending',
                isApproved: item.Status__c === 'Approved',
                isRejected: item.Status__c === 'Rejected'
            }));

            // Dashboard Statistics
            this.totalRequests = this.leaveRequests.length;

            this.pendingCount = this.leaveRequests.filter(
                leave => leave.Status__c === 'Pending'
            ).length;

            this.approvedCount = this.leaveRequests.filter(
                leave => leave.Status__c === 'Approved'
            ).length;

            this.rejectedCount = this.leaveRequests.filter(
                leave => leave.Status__c === 'Rejected'
            ).length;

        }

    }

    handleComment(event) {
        this.comments[event.target.dataset.id] = event.target.value;
    }

    async approve(event) {

        const id = event.target.dataset.id;

        await approveLeave({
            leaveId: id,
            comments: this.comments[id] || ''
        });

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Leave Approved Successfully',
                variant: 'success'
            })
        );

        refreshApex(this.wiredResult);
    }

    async reject(event) {

        const id = event.target.dataset.id;

        await rejectLeave({
            leaveId: id,
            comments: this.comments[id] || ''
        });

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Leave Rejected Successfully',
                variant: 'warning'
            })
        );

        refreshApex(this.wiredResult);
    }

}