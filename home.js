document.addEventListener("DOMContentLoaded", function () {
    gsap.to("#mainContent-1", { duration: 1, opacity: 1 });

    gsap.to("h2", { duration: 1, opacity: 1, x: "-20px", ease: "power2.out" });

    gsap.to("#lumizo-logo", { duration: 1, opacity: 1, x: "0px", ease: "power2.out", delay: 0.5 });

    gsap.to("#apostrophe", { duration: 0.7, opacity: 1, ease: "power2.out", delay: 1 });

    gsap.to("h4", { duration: 1, opacity: 1, filter: "blur(0px)", ease: "power2.out", delay: 1 });
});

    
//     const documents = {
//         accounting:[
//             { name: "Accounts Audit process", url: "https://www.canva.com/design/DAGfnzgjQoE/9fXOiiApQT8Uouoi6L7rJg/view" },
//             { name: "Ledger Management", url: "https://www.canva.com/design/DAGUYtjkf7I/hO_TZehH5ssWhxKGXd_x4A/view" },
//             { name: "Bank Transactions", url: "https://www.canva.com/design/DAGer0J1DYI/MohbXvgK0uPz95LCxU4xTQ/view" },
//             { name: "Sales Analysis", url: "https://www.canva.com/design/DAGeBwmxKhI/OtO1DOOM-o0df3XeRZbeKw/view" },
//             { name: "Accounts Managment", url: "https://www.canva.com/design/DAGeB4tc88M/Pr49YazOssB4jHauUWFkGA/view?utm_content=DAGeB4tc88M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf8ddb0f814" }
//         ],
    
//         Projects: [
//               { name: "Project Sales Analysis", url: "https://www.canva.com/design/DAGe9-1A1o4/W1RG61BaD662VoCwzLyKXw/view?utm_content=DAGe9-1A1o4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2f574bb0a8" },
//               { name: "Project Process", url: "https://www.canva.com/design/DAGfVN0L8i0/WQ0roqW_A65imrwVBBrfyQ/view?utm_content=DAGfVN0L8i0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0a2ad70d6e"}
//         ],
//         inventory: [
//             { name: "Inventory System case study", url: "https://www.canva.com/design/DAGTEzsOJ8g/62DK4eZ5IBQvKabg7WJz7A/view?utm_content=DAGTEzsOJ8g&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
// 	    { name: "Bar-code printing system case study", url: "https://www.canva.com/design/DAGUSNy97fs/iZjIJKdEUaFMnjJuUdQo9Q/view?utm_content=DAGUSNy97fs&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
// 	    { name: "Stock Counting and Recycling Process", url: "https://www.canva.com/design/DAGfEei3FC8/0CZ618HLEhaRMQUb-HfEfg/view?utm_content=DAGfEei3FC8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h43c494e767" },
// 	    { name: "Re-Order level", url: "https://www.canva.com/design/DAGfE1Ga5lo/R09L5EUn4uZLDCb8oyS7GQ/view?utm_content=DAGfE1Ga5lo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbf8f18d06d" },
// 	    { name: "stock movement report", url: "https://www.canva.com/design/DAGf_SASt50/9L4c72N7l5h0rXz1WTy1VQ/view?utm_content=DAGf_SASt50&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h95fcf641cb" },
//         { name: "Item specification", url: "https://www.canva.com/design/DAGhHpYx89Q/yebYjxdA9bw6d_PJDhnnHw/view?utm_content=DAGhHpYx89Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5b368932e9" },
//         { name: "Negative value Restriction", url: "https://www.canva.com/design/DAGgGOUtaE8/d5awvvUd1jn05PBEnpotuQ/view?utm_content=DAGgGOUtaE8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha7d128ec7b" }
        
//         ],
// 	 reporting: [
//         { name: "Net Sale Template Explanation", url: "./Net Sale (1).pdf" },
// 	    { name: "System Audit Process", url: "https://www.canva.com/design/DAGhTGo2_8o/o9paAUSUH0T35xcb8P_yZw/view?utm_content=DAGhTGo2_8o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1497204cc8" },
// 	    { name: "Project Sales Analysis", url: "https://www.canva.com/design/DAGe9-1A1o4/W1RG61BaD662VoCwzLyKXw/view?utm_content=DAGe9-1A1o4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2f574bb0a8" },
//         { name: "Image Uploading Process", url: "https://www.canva.com/design/DAGhT6Obh2Y/BGeib8FoaF_gDTFqpZ6i1w/view?utm_content=DAGhT6Obh2Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h15f2f4ff94" }
		
// 	],

// 	Company: [
//            { name: "Ledger Management", url: "https://www.canva.com/design/DAGUYtjkf7I/hO_TZehH5ssWhxKGXd_x4A/view?utm_content=DAGUYtjkf7I&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
// 	   { name: "Internal Process", url: "https://www.canva.com/design/DAGexdd2Ous/QpVaalF7f9de8PARHzqWIg/view?utm_content=DAGexdd2Ous&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1622cccda7" },
// 	   { name: "busy system explanation", url: "./busy_courseware.pdf" }
	   
// 	]

//     };

//     function showDepartment(department) {
//     const docList = document.getElementById("docList");
//     docList.innerHTML = ""; // Clear previous entries

//     if (!documents[department]) return;

//     Object.keys(documents[department]).forEach(category => {
//         const categoryItem = document.createElement("li");
//         categoryItem.innerHTML = `<strong>${category}</strong>`;
//         categoryItem.style.cursor = "pointer";
//         categoryItem.onclick = () => showCategory(department, category);
//         docList.appendChild(categoryItem);
//     });

//     document.getElementById("documents").style.display = "block";
// }

// function showCategory(department, category) {
//     const docList = document.getElementById("docList");
//     docList.innerHTML = ""; // Clear previous entries

//     documents[department][category].forEach(doc => {
//         const li = document.createElement("li");
//         li.innerHTML = `<a href="${doc.url}" target="_blank">${doc.name}</a>`;
//         docList.appendChild(li);
//     });

//     // Add "Back" button to go back to categories
//     const backBtn = document.createElement("li");
//     backBtn.innerHTML = `<strong style="color: red; cursor: pointer;">⬅ Back to Categories</strong>`;
//     backBtn.onclick = () => showDepartment(department);
//     docList.prepend(backBtn);
// }
