import gdShare from "../assets/share.png"
import exampleEmail from "../assets/email.png"


export default function Setup() {
    return (
        <div>
            <p>Setup</p>
            <p>Step 1: Gathering Information</p>
            <p>This is what we're looking for!</p>
            <ul>
                <li>name</li>
                <li>program</li>
                <li>coop term</li>
                <li>semester</li>
                <li>resume url link from Google Drive</li>
                <li>pfp url link from Google Drive</li>
            </ul>
            <p>Step 2: Getting your Resume URL from Google Drive</p>
            <img src={gdShare.src} alt="" />
            <p>First go to the PDF or Doc of your resume and click on "Share." A pop up like this should appear
               and you will click on "Copy Link" <br></br>

               You will get something like this https://docs.google.com/document/d/GOOGLE_DRIVE_ID/edit?usp=sharing
               and all you have to do is get that GOOGLE_DRIVE_ID, and then forget about the rest of the URL! Just 
               the GOOGLE_DRIVE_ID is of importance.
            </p>
            <p>Step 3: Getting your Profile Picture URL from Google Drive</p>
            <p>Exactly the same as Step 2! Open your pdf, png or whatever image you have on google drive and 
                click share. Copy the link. Extract the GOOGLE_DRIVE_ID as specified and your done!
            </p>
            <p>Your Good to Go!</p>
            <p>Send us an email through your school email example@uwaterloo.ca in the example format below! 
               We will get in touch and let you know when you get on the website! Thanks!</p>
            <img src={exampleEmail.src} alt="" />
        </div>
    )
}