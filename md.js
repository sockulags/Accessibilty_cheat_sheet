const accessibilityCheatSheet = `
# Accessibility Cheat Sheet

## Table of Contents<a id="toc"></a>
1. [Introduction](#introduction)
2. [Semantic HTML](#semantic-html)
3. [Elements](#elements)
    - [Forms](#forms)
    - [Headings](#headings)
    - [Images](#images)
    - [Input Fields](#inputfields)
    - [Links](#links)
7. [Keyboard Navigation](#keyboard-navigation)
8. [Color Contrast](#color-contrast)
9. [Testing Tools](#testing-tools)
10. [Resources](#resources)

## Introduction <a id="introduction"></a>
Description of the accessibility cheat sheet and its importance.

## Semantic HTML <a id="semantic-html"></a>
Guidelines on using semantic HTML elements.


## Elements <a id="elements"></a>

### Forms <a id="forms"></a>
**Success criteras**:

1. **Info and Relationships (1.3.1)**: Each form control has a corresponding label, established using the \`for\` attribute in \`<label>\` and the \`id\` attribute in \`<input>\`.
   
2. **Keyboard (2.1.1)**: All form controls can be operated using a keyboard alone.
   
3. **Labels or Instructions (3.3.2)**: Each form control has a visible label associated with it using the \`<label>\` element.
   
4. **Name, Role, Value (4.1.2)**: Each form control has an accessible name provided either through a visible label or an \`aria-label\` attribute.
   
5. **Status Messages (4.1.3)**: The \`<form>\` element includes an \`aria-live\` attribute set to "polite", indicating that any status messages within the form should be announced by assistive technologies when they become available.

    \`\`\`html
    <form action="/submit" method="post" aria-live="polite">
      <label for="username">Username:</label>
      <input type="text" id="username" id="username" aria-label="Username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" id="password" aria-label="Password" required>
      <button type="submit" aria-label="Submit">Submit</button>
    </form>
    \`\`\`

Under [*Inputfields*](#formExample) you can find another form example with status message \`js\` to it.

This example ensures that the form is accessible, operable, and understandable for all users, including those using assistive technologies or relying solely on keyboard navigation.

### Headings <a id="headings"></a>

**Success criterias:**
1. **Semantic Structure (1.3.1)**: The headings (\`<h1>\` to \`<h3>\`) provide a semantic structure to the content, indicating hierarchy and importance within the document.
   
2. **Keyboard (2.1.1)**: Headings are operable via keyboard navigation by default.
   
3. **Labels or Instructions (3.3.2)**: Each heading has visible text content that acts as a label or instruction, providing meaningful titles for the sections they represent.
   
4. **Name, Role, Value (4.1.2)**: Each heading has an accessible name provided through its visible text content, and the \`lang\` attribute specifies the language of the content. 

\`\`\`html
<h1 id="mainHeading" lang="en">Welcome to Our Website</h1>

<section>
  <h2 id="aboutHeading">About Us</h2>
  <p>...</p>

  <h3 id="missionHeading">Our Mission</h3>
  <p>...</p>

  <h3 id="visionHeading">Our Vision</h3>
  <p>...</p>
</section>

<section>
  <h2 id="servicesHeading">Our Services</h2>
  <ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
  </ul>
</section>
\`\`\`
This example demonstrates a structured document with headings indicating the main sections and subsections of the page. Each heading contributes to the accessibility, operability, and understandability of the content. 

### Images <a id="images"></a>
**Success criterias**

1. **Non-text Content (1.1.1)**: The \`<img>\` element has an \`alt\` attribute providing a descriptive alternative text for the image.   
2. **Images of Text (1.4.5)**: The image does not contain text, so this criterion is automatically met.      
3. **Language of Page (3.1.1)**: The \`lang\` attribute is used to specify the language of the image alternative text.   
4. **Name, Role, Value (4.1.2)**: The image has a role of "img" explicitly set to denote its purpose as an image, and its accessible name is provided using an \`aria-labelledby\` attribute, which points to a hidden \`<span>\` element containing a descriptive label.

\`\`\`html
<img src="example.jpg" alt="Description of the image" role="img" aria-labelledby="imgLabel" lang="en">
<span id="imgLabel" hidden>Image Description</span>
\`\`\`
This example ensures that the image is accessible, understandable, and conveys its purpose effectively for all users, including those using assistive technologies.

### Inputfields <a id="inputfields"></a>
**Success criterias**
1. **1.3.1 Info and Relationships**: Ensures semantic structure in content, including form controls, and establishes programmatically determinable relationships between them and their labels.
2. **Keyboard (2.1.1)**: The input field can be operated using a keyboard alone.
   
3. **Labels or Instructions (3.3.2)**: The input field has a visible label associated with it using the \`<label>\` element.
   
4. **Name, Role, Value (4.1.2)**: The input field has an accessible name provided either through a visible label or an \`aria-label\` attribute, and the \`aria-required\` attribute is set to "true" to indicate that the field is required.
   
5. **Status Messages (4.1.3)**: 
   - The \`aria-invalid\` attribute indicates the validation status of the input field. Initially, it's set to "false" (\`aria-invalid="false"\`), indicating that no errors are present.
   - The \`aria-describedby\` attribute is set to the ID of the \`<div>\` element (\`aria-describedby="usernameError"\`) to associate the input field with the status message.
   - The \`<div>\` element with ID "usernameError" serves as a container for status messages related to the username input field. It has \`role="alert"\` to ensure that screen readers announce it immediately, \`aria-live="polite"\` to ensure that updates to the content are announced by assistive technologies, and initially, it's hidden (\`hidden\` attribute). When an error occurs, it's dynamically shown to convey the error message to users.

Examples:

1. **Text Input**:
   \`\`\`html
   <label for="username">Username:</label>
   <input type="text" id="username" id="username" aria-label="Username" aria-required="true" aria-invalid="false" aria-describedby="usernameError" lang="en">
   <div id="usernameError" role="alert" aria-live="polite" hidden>No errors detected.</div>
   \`\`\`

2. **Password Input**:
   \`\`\`html
   <label for="password">Password:</label>
   <input type="password" id="password" id="password" aria-label="Password" aria-required="true" aria-invalid="false" aria-describedby="passwordError" lang="en">
   <div id="passwordError" role="alert" aria-live="polite" hidden>No errors detected.</div>
   \`\`\`

3. **Email Input**:
   \`\`\`html
   <label for="email">Email:</label>
   <input type="email" id="email" id="email" aria-label="Email" aria-required="true" aria-invalid="false" aria-describedby="emailError" lang="en">
   <div id="emailError" role="alert" aria-live="polite" hidden>No errors detected.</div>
   \`\`\`

4. **Number Input**:
   \`\`\`html
   <label for="quantity">Quantity:</label>
   <input type="number" id="quantity" id="quantity" aria-label="Quantity" aria-required="true" aria-invalid="false" aria-describedby="quantityError" lang="en">
   <div id="quantityError" role="alert" aria-live="polite" hidden>No errors detected.</div>
   \`\`\`

5. **Checkbox Input**:
   \`\`\`html
   <input type="checkbox" id="subscribe" id="subscribe" aria-label="Subscribe to newsletter" aria-checked="false">
   <label for="subscribe">Subscribe to newsletter</label>
   \`\`\`

6. **Radio Input**:
   \`\`\`html
   <fieldset>
     <legend>Preferred Contact Method:</legend>
     <input type="radio" id="contactEmail" id="contact" value="email" aria-label="Contact via Email">
     <label for="contactEmail">Email</label><br>
     <input type="radio" id="contactPhone" id="contact" value="phone" aria-label="Contact via Phone">
     <label for="contactPhone">Phone</label><br>
     <input type="radio" id="contactMail" id="contact" value="mail" aria-label="Contact via Mail">
     <label for="contactMail">Mail</label>
   </fieldset>
   \`\`\`

7. **Date Input**:
   \`\`\`html
   <label for="birthdate">Birthdate:</label>
   <input type="date" id="birthdate" id="birthdate" aria-label="Birthdate" aria-required="true" aria-invalid="false" aria-describedby="birthdateError" lang="en">
   <div id="birthdateError" role="alert" aria-live="polite" hidden>No errors detected.</div>
   \`\`\`

8. **File Input**:
   \`\`\`html
   <label for="fileUpload">Upload File:</label>
   <input type="file" id="fileUpload" id="fileUpload" aria-label="File Upload" aria-required="true" aria-describedby="fileUploadError" lang="en">
   <div id="fileUploadError" role="alert" aria-live="polite" hidden>No errors detected.</div>
   \`\`\`

9. **Textarea Input**:
   \`\`\`html
   <label for="message">Message:</label>
   <textarea id="message" id="message" aria-label="Message" aria-required="true" aria-invalid="false" aria-describedby="messageError" lang="en"></textarea>
   <div id="messageError" role="alert" aria-live="polite" hidden>No errors detected.</div>
   \`\`\`

10. **Submit Button**:
    \`\`\`html
    <button type="submit" aria-label="Submit Form">Submit</button>
    \`\`\`

11. **Example with validation and status message**:<a id="formExample"></a>
    \`\`\`html
    <form id="myForm" action="/submit" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" id="username" aria-label="Username" aria-required="true" aria-invalid="false" aria-describedby="usernameError" lang="en">
      <div id="usernameError" role="alert" aria-live="polite" hidden>No errors detected.</div>

      <label for="email">Email:</label>
      <input type="email" id="email" id="email" aria-label="Email" aria-required="true" aria-invalid="false" aria-describedby="emailError" lang="en">
      <div id="emailError" role="alert" aria-live="polite" hidden>No errors detected.</div>

      <button type="submit" aria-label="Submit Form">Submit</button>
    </form>

    <script>
      const form = document.getElementById('myForm');

      form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset all error messages
        const errorElements = form.querySelectorAll('[id$="Error"]');
        errorElements.forEach(function(error) {
          error.setAttribute('hidden', 'true');
          error.textContent = 'No errors detected.';
        });

        // Validate each input field
        const inputs = form.querySelectorAll('input[aria-required="true"]');
        inputs.forEach(function(input) {
          const errorId = input.getAttribute('aria-describedby');
          const errorElement = document.getElementById(errorId);

          if (input.getAttribute('aria-invalid') === 'true') {
            errorElement.removeAttribute('hidden');
          }
        });

        // If all inputs are valid, submit the form
        const invalidInputs = form.querySelectorAll('input[aria-invalid="true"]');
        if (invalidInputs.length === 0) {
          form.submit();
        }
      });
    </script>
    \`\`\`



### Links <a id="links"></a>
**Success criterias**
1. **Link Purpose (2.4.4)**:   
    - **Link 1 (With hidden span)**: The link text "Example Website" combined with the \`aria-label\` attribute ("Visit Example Website") provides a clear purpose for the link. Additionally, the hidden span with the \`id\` of \`link1Desc\` contains the description "Opens an external website," providing further context for users of assistive technologies.
   
   - **Link 2 (Without hidden span)**:
    The link text "Jump to Section 1" combined with the \`aria-label\` attribute ("Jump to Section 1") provides a clear purpose for the link.

2. **Name, Role, Value (4.1.2)**:   
Both links have an accessible name provided through either the visible link text or the \`aria-label\` attribute, ensuring that their purpose is programmatically determinable.

3. **Status Messages (4.1.3)**:  
The hidden span element (\`link1Desc\`) associated with Link 1 provides an accessible status message ("Opens an external website") to users of assistive technologies, ensuring they have additional context about the link's purpose.
\`\`\`html
<!-- Link 1: With hidden span -->
<a href="https://www.example.com" id="link1"  aria-label="Visit Example Website" aria-describedby="link1Desc">Example Website</a>
<span id="link1Desc" hidden>Opens an external website</span>

<!-- Link 2: Without hidden span -->
<a href="#section1" id="link2" aria-label="Jump to Section 1">Jump to Section 1</a>
\`\`\`

## Keyboard Navigation <a id="keyboard-navigation"></a>
Tips for ensuring keyboard accessibility.

## Color Contrast <a id="color-contrast"></a>
Information on maintaining adequate color contrast for readability.

## Testing Tools <a id="testing-tools"></a>
Recommended tools for testing accessibility.

## Resources <a id="resources"></a>
Additional resources for learning more about web accessibility.
`;

