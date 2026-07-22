public with sharing class LeaveController {

    @AuraEnabled
    public static String createLeaveRequest(
        String studentName,
        String studentId,
        String email,
        String department,
        String year,
        Date leaveFrom,
        Date leaveTo,
        String reason
    ) {

        Leave_Request__c leave = new Leave_Request__c();

        leave.Student_Name__c = studentName;
        leave.Student_ID__c = studentId;
        leave.Email__c = email;
        leave.Department__c = department;
        leave.Year__c = year;
        leave.Leave_From__c = leaveFrom;
        leave.Leave_To__c = leaveTo;
        leave.Reason__c = reason;
        leave.Status__c = 'Pending';

        insert leave;

        return 'Leave Request Submitted Successfully';
    }


    @AuraEnabled(cacheable=true)
    public static List<Leave_Request__c> getLeaveRequests() {

        return [
            SELECT
                Id,
                Name,
                Student_Name__c,
                Student_ID__c,
                Email__c,
                Department__c,
                Year__c,
                Leave_From__c,
                Leave_To__c,
                Reason__c,
                Status__c,
                Faculty_Comments__c
            FROM Leave_Request__c
            ORDER BY CreatedDate DESC
        ];
    }


    @AuraEnabled
    public static void approveLeave(Id leaveId, String comments) {

        Leave_Request__c leave = [
            SELECT
                Id,
                Status__c,
                Faculty_Comments__c
            FROM Leave_Request__c
            WHERE Id = :leaveId
            LIMIT 1
        ];

        leave.Status__c = 'Approved';
        leave.Faculty_Comments__c = comments;

        update leave;
    }


    @AuraEnabled
    public static void rejectLeave(Id leaveId, String comments) {

        Leave_Request__c leave = [
            SELECT
                Id,
                Status__c,
                Faculty_Comments__c
            FROM Leave_Request__c
            WHERE Id = :leaveId
            LIMIT 1
        ];

        leave.Status__c = 'Rejected';
        leave.Faculty_Comments__c = comments;

        update leave;
    }

}