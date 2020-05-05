import { ComponentFixture, async, TestBed } from "@angular/core/testing"
import { SessionListComponent } from './session-list.component'
import { DebugElement } from '@angular/core'
import { AuthService } from 'src/app/user/auth.service'
import { DurationPipe } from '../../shared/duration.pipe'

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement

    beforeEach(async(()=>{
        let mockAuthService = {};

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                DurationPipe
            ],
            providers: [
                {provide:AuthService, useValue:mockAuthService},
            ],
            schemas: []
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('Initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [{id:3, name:'Session 1', presenter: 'Joe', duration: 1}];

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('.well').textContent).toContain('Session 1')
        })
    })
})