import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { NgxSpinnerService } from "ngx-spinner";
import { EmailObj, ShareConfigRequest } from "projects/commissioningwebportal-app/src/app/models/share-config";

import { AlertService } from "projects/commissioningwebportal-app/src/app/modules";
import { ConfirmModalComponent } from "projects/commissioningwebportal-app/src/app/shared/confirm-modal/confirm-modal.component";
import { GenericConfigurationService } from "../../services/generic-configuration.service";

@Component({
    selector: 'app-shareconfiguration-model',
    templateUrl: './share-configuration.component.html',
    styleUrls: ['./share-configuration.component.scss']
})
export class ShareConfigurationModelComponent implements OnInit {
    shareConfigurationForm: FormGroup;
    public emailList: EmailObj[];
    public invalidEmailList: string[] = [];
    shareConfig: ShareConfigRequest;
    textAreaBind: string = "";
    isShare = false;
    @Input() jsonData: any;
    @Input()
    ShareToUsers: string;
    Name :string;
    EmailAddress:string;
    SendInvitation:string;
    InvalidEmailId:string;
    TextAreaPlaceHolder:string;
    

    popupObjectMessage: any = {};
    isSendInvitationDisabled: boolean = true;
    isControlPrev: string = "";
    public keys: string[] = [",","Backspace","Enter","Control","v"," "];

    constructor(public activeModal: NgbActiveModal, private translate: TranslateService, private modalService: NgbModal, private router: Router,
        private fb: FormBuilder, private genericConfigurationService: GenericConfigurationService,
        private spinner: NgxSpinnerService, private alert: AlertService) {
    }
    ngOnInit(): void {
        document.getElementById("emails")?.focus({ preventScroll: true });
    }

    //send invitation functionality
    sendManyUserInvitation() {
        this.spinner.show();
        let emailIds = this.textAreaBind.split(',');

        //Remove all the whitespace, empty, duplicate email id's
        for (let i = 0; i < emailIds.length; i++) {
            emailIds[i] = emailIds[i].trim();
        }
        emailIds = this.removeEmpty(emailIds);
        emailIds = this.removeDups(emailIds);

        //Share configuration api call
        this.shareConfig = {
            JsonFile: this.jsonData,
            EmailList: emailIds
        }
        this.genericConfigurationService.ShareConfigFile(this.shareConfig).subscribe(res => {
            if (res) {
                this.spinner.hide();
                this.activeModal.close(res);
                this.alert.success(res, this.genericConfigurationService.setTimeOutValue, true);
            }
        }, (err: any) => {
            this.alert.error("Unable to share the json file");
            this.spinner.hide();
        });
    }

    //Paste functionality
    onPaste(event: ClipboardEvent) {
        let pastedText = event?.clipboardData?.getData('text');
        let emailIds = pastedText != undefined ? pastedText.split(',') : [];
        this.ValidateEmailIds(emailIds);
    }

    // Checking if all email id's entered are proper. If not show the invalid email id's
    onKeyUp(x) {
        if (this.keys.includes(x.key)) {
            if (x.key == "v" && this.isControlPrev == "Control") {
                let emailIds = this.textAreaBind.split(',');
                this.ValidateEmailIds(emailIds);
            }
            else if (x.key != "v") {
                this.isControlPrev = x.key;
                let emailIds = this.textAreaBind.split(',');
                this.ValidateEmailIds(emailIds);
            }
        }
        else {
            if (this.textAreaBind.trim().toLowerCase().endsWith("@ecolab.com")) {
                let emailIds = this.textAreaBind.split(',');
                this.ValidateEmailIds(emailIds);
            }
            else {
                let start = x.target.selectionStart;
                if(start!==this.textAreaBind.length){
                    let emailIds = this.textAreaBind.split(',');
                    this.ValidateEmailIds(emailIds);
                }
                else{
                    this.isSendInvitationDisabled = true;
                }
            }
        }
    }

    ValidateEmailIds(emailIds: string[]) {
        this.invalidEmailList = [];
        emailIds = this.removeEmpty(emailIds);
        emailIds.forEach(element => {
            if (!this.isEmail(element.trim().toLowerCase())) {
                this.invalidEmailList.push(element.trim());
            }
        });
        this.invalidEmailList = this.removeEmpty(this.invalidEmailList);
        if (this.invalidEmailList.length > 0 || emailIds.length == 0) {
            this.isSendInvitationDisabled = true;
        }
        else {
            this.isSendInvitationDisabled = false;
        }
    }

    //Regular expression check
    isEmail(emilString: string): boolean {
        var serchfind: boolean;
        let pattern = new RegExp("^[a-zA-Z0-9_.+-@!'\"\\\]\\$#%^&*()~=|[{};:?<>/]+@ecolab.com$");
        serchfind = pattern.test(emilString);
        return serchfind
    }

    removeDups(list) {
        return list.filter((elem, index, self) => {
            return index === self.indexOf(elem);
        })
    }

    removeEmpty(list) {
        return list.filter(x => x.trim() !== '');
    }

    closeModel() {
        if (this.textAreaBind != "") {
            const modalRef = this.modalService.open(ConfirmModalComponent, { size: 'sm', windowClass: 'el-confirm-modal' });
            modalRef.componentInstance.messageText = "Are you sure you want to close without sharing the config file?";
            modalRef.componentInstance.confirmText = "Yes";
            modalRef.componentInstance.cancelText = "Cancel";
            modalRef.result.then(res => {
                if (res) {
                    this.activeModal.dismiss('Cross click');
                }
                else {

                }
            });
        }
        else {
            this.activeModal.dismiss('Cross click');
        }

    }

    //On click of the chip close button, invalid email ids to be removed.
    removeEmailId(index: any, id: any) {
        this.invalidEmailList.splice(index, 1);
        let emailIds = this.textAreaBind.split(',');
        for (let i = 0; i < emailIds.length; i++) {
            emailIds[i] = emailIds[i].trim();
        }
        const indexTextBox = emailIds.indexOf(id);
        emailIds.splice(indexTextBox, 1);
        this.textAreaBind = "";
        emailIds = this.removeEmpty(emailIds);
        emailIds.forEach(element => {
            this.textAreaBind += element + ', '
        });
        this.ValidateEmailIds(emailIds);
    }
}