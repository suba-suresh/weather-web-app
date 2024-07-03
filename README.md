# Sun Clouds Rain

Sun Clouds Rain is a site that is targetted towards chiildren to look up the weather for a given location - with the current day and a further 5 days weather forecast shown for the location entered.  The experience also includes a game Sun Clouds Rain, which is similar to Rock Paper Scisssors but using the Weather.  The computer picks some random Weather, which is then compared against each of the six days of weather shown and a winner is shown.

![Responsive Mockup](assets/suppdocs/Sun,%20Clouds,%20Rain.pdf)

## Index – Table of Contents
* [User Experience (UX)](#user-experience-ux) 
* [Features](#features)
* [Design](#design)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## User Experience (UX)

An ideation process was undertaken to suggest and prioritise the user experience for the site.  From this user stories were generated, prioritised (including establishing a Minimum Viable Product) and managed using a Kanban board on GitHub.

-   ### User stories

    -   #### MVP(Minimum Viable Product):
        1. In order to **see what website I am on** as a **user**, I can **see the h1 title at the top of the page**
        2. In order to **select a location for the weather** as a **user**, I can **type in a location in the search bar**
        3. In order to **submit my weather request** as a **user**, I can **click the search button**
        4. In order to **see today’s weather** as a **user**, I can **see on the left side a big section with today’s temperature and weather symbol**
        5. In order to **know that it is a weather forecast** as a **user**, I can **see a h2 that explains that this is a weather forecast**
        6. In order to **see the forecast for the next five days** as a **user**, I can **see the next five days forecast just right of today’s forecast with day of the week listed above each symbol**
        7. In order to **clearly understand what the website is about** as a **user**, I can **see a big orange container with a welcome message, brief explanation of what the website is for and what step one is**

        #### Weather Enhancements:
        8. In order to **avoid getting information from a place in the wrong country** as a **user**, I can **select my country from the drop down**
        9. In order to **see which location and country I have selected** as a **user**, I can **see my choice  next to the words: ‘user choice’**
        10. In order to **understand where the weather location is** as a user I can see a map with the selected location marked on it.
        11. In order to **get a full weather view** as a **user**, I can **see pressure, humidity, pollen count and wind speed as part of the forecast**
        12. In order to **clearly see the 5 day forecast** as a **user**, I can **see the date for each days forecast**
        13. In order to **promote the site as a way to engage users** as a **provider**, I can **give about us info on our organization and its aims**
        
        #### Sub Clouds Rain Game:
        14. In order to **know that my weather is competing against the computer** as a **user**, I can **see a big vs sign just right of my selection**
        15. In order to **see what the computer has chosen** as a **user**, I can **see the computer’s weather icon below the words ‘The weather to beat’**
        16. In order to **know which weather has beaten or been beaten by the computer’s choice** as a **user**, I can **see a + or - symbol below each days weather symbol**
        17. In order to **to see a sum of how many wins I got** as a **user**, I can **see the tally next the text /6 at the bottom of the page**
        18. In order to **clearly see who won the round** as a **user**, I can **see text at the bottom of the page which says ‘computer wins’ or ‘You won’**
        19. In order to **to see information on how to play** as a **user**, I can **click the ‘how to play’ button found in the footer and see a diagram and steps appear in a pop up container**
        20. In order to **compete against a new computer choice** as a **user**, I can **press the ‘next round’ button**
        21. In order to **focus on the weather** as a **user**, I can **see the weather and choose whether or not to start the game.**
        22. In order to **get to know other Sun, Clouds, Rain competitors** as a **user**, I can **join a social media community of other users**
        23. In order to **personalize the app** as a **user**, I can **enter my name and have it shown in the game versus the computer.**
        24. In order to **promote continued playing of the game** as a **user**, I can **see cumulative scores for multiple rounds of the game**
  
## Features 

### Existing Features

- __Navigation Bar__

  - Featured on all three pages, the full responsive navigation bar includes links to the Home page, Case Studies, Resources, and Advice page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](documentation/screenshots/header.png)

- __Principles and Objectives Section__

  - On the landing page the first thing the user can see is a summary of what Prevent aims to do, how schools are involved, the role of prevent officers, and how to spot the signs of radicalisation.
  - The user will see the value prevent and will hopefully want to learn more on the other web pages.

![Club Ethos](documentation/screenshots/home.png)

- __The Footer__ 

  - The footer section includes copyright disclaimer information, a button to a feedback modal form, and social media links to counter terrorism police UK.
  - The footer is valuable to the user as it encourages them to keep connected via social media, provide us with feedback, and informs any concerned parties of our sources of information.

![Footer](documentation/screenshots/footer.png)

- __Feedback Modal__ 

  - The feedback button found in the footer, opens up a modal which has an email field, textbox area, close and send buttons.
  - This allows the user to send any feedback they want to about the website, increasing their engagement.

![feedback modal](documentation/screenshots/feedback-form.png)

- __Resources Page__

  - The resources page will provide the user with motivational images relating to the elements of Prevent; as well as embed youtube videos from related organizations.
  - This page is useful to the user as it condenses factual information into easily digestible segments.

![Gallery](documentation/screenshots/resources-mobile.png)

- __Advice Page__

  - This page allows the user to find the appropriate authorities to contact about their concerns.
  - Alternatively they can provide their contact information if they wish to be contacted. They also have the option to specify their preferred means of contact.
  - This page is useful to the user as after viewing the other pages, they may recognise symptons of radicalisation in a friend/themself, and need advice on what to do.

![Sign Up](documentation/screenshots/advice.png)

- __Case Studies Page__

  - The case studies page will provide the user examples of how Prevent has stepped in, and deradicalised people before they put themselves or others to harm.
  - This page is useful to the user as it puts faces to the issue of extremism and shows how things can be turned around. This personifies the issues the site is trying to convey.

![Case Studies](documentation/screenshots/case-studies.png)

### Features Left to Implement

- Resources: external links to other organizations prevent workshops
	- It would be helpful to allow users to find other useful workshops about prevent such as online courses.
- Advice section: how to talk to your potential extremist friend
	- Not every case needs police intervention. Before contacting the police it is important to assess how extreme your friend is. It may also be possible to help deradicalise them if you have the correct approach. This section would attempt to answer these issues.
- Links to sections within the page
	- If we get to a point where our website involves a lot of scrolling, it may be worthwhile adding internal links to segments of the page.
- Resources: community initiatives
	- If after viewing our website a user would like to help stop extremism, we would include links to respectable community initiatives that band together to do just that.
  
## Design

-   ### Colour Scheme
    -  We agreed that a couple dark colours mixed with bright colours would work for our website. Including red was important to convey the danger of terrorism. The colours picked were generated the website [Coolors](https://coolors.co/)

        ![Colour Palette](documentation/colour-palette/colourpalette.png)

-   ### Typography
    - Google Fonts were used to import Roboto condensed and Roboto fonts into styles.css.  These were chosen as they incorporate a lot of straight thick lines which comes across as oppressive. The fonts were tested for their effectiveness by how they made the word 'terrorism' look.
 
    ![Font Pairing](documentation/font-family/font-pair.png)   

-   ### Logo/Icon
    - The logo design incorporates a shield and binoculars. The shield because Prevent seeks to protect, and binoculars because Prevent needs to look closely to spot signs of radicalisation. The logo was generated using [bing copilot designer](https://www.bing.com/chat?q=Microsoft+Copilot&FORM=hpcodx)
 
	![Logo](assets/favicon/android-chrome-192x192.png)

-   ### Wireframes

    -   #### Khadeeja Wireframes

        ![Khadeeja wireframes](documentation/wireframes/wireframe1.png)

    -   #### Yu homepage and case studies Wireframes

        ![Yu homepage and case studies](documentation/wireframes/wireframe2.png)

    -   #### Yu resources and advice Wireframes

        ![Yu resources and advice](documentation/wireframes/wireframe3.png)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

-   [Google Fonts:](https://fonts.google.com/) was used to import the 'Margarine' and 'Caveat' fonts into the style.css file which are used across the project site page.
-   [Font Awesome:](https://fontawesome.com/) was used to add icons for aesthetic and UX purposes.
-   [Git:](https://git-scm.com/) was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
-   [GitHub:](https://github.com/) is used as the respository for the projects code after being pushed from Git.
-   [Balsamiq:](https://balsamiq.com/) was used to create the wireframes during the design process.
-   [bootstrap 5.3:](https://getbootstrap.com/) was the framework used to streamline styling classes.
-   [favicon:](https://favicon.io/) was used for creating website logo icons.
    

## Testing 


### Validator Testing 

- HTML
  - 4 errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarkchips.github.io%2Fprevent-awareness%2Findex.html)
- CSS
  - 1 error was found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarkchips.github.io%2Fprevent-awareness%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- HTML

### Unfixed Bugs

- Page content keeps disappearing behind header on some screen sizes. This relates to the header being position: fixed. The content needs the margin to be adjusted.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab
  - Click pages on the left side
  - In the branch section, use the drop down menu to select the main branch
  - Click save, and then wait for the deployment to be generated
  - Click visit site button at top of settings

The live link can be found here - https://markchips.github.io/prevent-awareness/index.html


## Credits 

### Content 

- The layout was influenced by the following code institute projects:
	- [Love Running](https://github.com/Code-Institute-Solutions/love-running-v3/tree/main/8.1-testing-and-validation)
	- [Love Rosie](https://github.com/Code-Institute-Solutions/resume-miniproject-bootstrap4/tree/master)
- The following UK government web pages were used for all factual information:
	- Case Study: https://www.gov.uk/government/publications/the-prevent-duty-safeguarding-learners-vulnerable-to-radicalisation/case-studies
 	- Prevent Officers on Home Page: https://www.met.police.uk/advice/advice-and-information/t/prevent/prevent/
  	- Prevent Terrorism on Homepage: https://www.gov.uk/government/publications/independent-review-of-prevents-report-a[…]endent-review-of-prevent-one-year-on-progress-report-accessible
  	- Prevent School on HomePage: https://www.teachingcitizenship.org.uk/wp-content/uploads/2022/08/ACT_Prevent-and-controversial-issues-guidance_guide-1.pdf
  	- Prevent Spotting the Signs: https://www.met.police.uk/advice/advice-and-information/t/prevent/prevent/
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The icons were taken from [Font Awesome](https://fontawesome.com/)
- The fonts used were imported from [Google Fonts](https://fonts.google.com/)

- Images were sourced from www.freepik.com, and taken from the following web pages:
	- https://www.freepik.com/free-photo/black-white-vehicles-yellow-caution-tape-near-car-parking-lot-daytime-crime-scene_9818237.htm#fromView=search&page=1&position=34&uuid=69e5363c-95dc-4b74-96a1-cda464b3fd90
	- https://www.freepik.com/free-vector/crime-scene-with-tape-concept-illustration_37573771.htm#fromView=search&page=1&position=7&uuid=f659683b-489f-444b-8ce9-267a93dde8c1
	- https://www.freepik.com/free-photo/wedding-bouquet-rocks_3402602.htm#fromView=search&page=1&position=0&uuid=c9b5bc51-2d3c-4268-9e6b-5040e2925bb5
	- https://www.freepik.com/free-ai-image/diverse-people-addicted-their-smart-devices-scrolling-through-looking-into-their-screens_186027476.htm#fromView=search&page=1&position=17&uuid=8515378b-b6bf-4255-95f5-2a4a3e313bdc
	- http