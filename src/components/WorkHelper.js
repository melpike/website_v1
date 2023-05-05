import ABFreeTrialImage from '../images/work/featured-freetrial.webp';
import ABFreeTrialVideo from '../images/work/a_b.free_trial.mp4';
import TeamTrialImage from '../images/work/featured-teamtrial.webp';
import TeamTrialVideo from '../images/work/team_trial.mp4';
import RebrandImage from '../images/work/featured-rebranding.webp';
import RebrandVideo from '../images/work/rebrand_subs_menu.mp4';

export const WorkCard = [
    {
        title: 'Free Trial Experience',
        imageUrl: ABFreeTrialImage,
        details: {
            stack: 'React | PHP',
            problem: 'An increase number of customers were not completing the trial form, so we wanted to create an A/B test to see if we could improve the percentage of customers completing the form.',
            solution: 'Condense the free trial form to ask for a reduced amount of information, without affecting our qualified leads for our sales team.',
            video: ABFreeTrialVideo,
        }
    },

    {
        title: 'Trial Team Member Invite',
        imageUrl: TeamTrialImage,
        details: {
            stack: 'React | PHP',
            problem: 'In trial the customer is able to create a team, and invite members using a “copy link” button. However, customers found it confusing or nonintuitive as to what to do with the link after it was copied.',
            solution: 'Using an invite form interface, the hope is to reduce the amount of confusion by letting the user specify the recipient\'s name and email address. On submission, the invite will send to the recipient(s) and gives a confirmation to the user.',
            video: TeamTrialVideo,
        }
    },

    {
        title: 'Rebranding In-app',
        imageUrl: RebrandImage,
        details: {
            stack: 'React | HTML | SCSS | PHP',
            problem: 'An initiative spearheaded by the marketing department to update the company’s branding to be more inline with other enterprise companies led to a brand and style update of the client facing website. With this update, the continuity of design between the website and the app were noticeably off.',
            solution: 'Realistically, with the size of the app, updating the branding has been done as new work or experiments get prioritized. This example is specifically on the subscriptions page, as well as the main and secondary menus.',
            video: RebrandVideo,
        }
    },
]