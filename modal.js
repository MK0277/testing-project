document.addEventListener("DOMContentLoaded", function() {
  // Get the button/link
  const openBtn = document.getElementById("openCollegeProjects");
  // Get the modal
  const collegeModalEl = document.getElementById("collegeProjectsModal");

  if (openBtn && collegeModalEl) {
    // Initialize Bootstrap modal
    const collegeModal = new bootstrap.Modal(collegeModalEl);

    // Open modal on click
    openBtn.addEventListener("click", function(e) {
      e.preventDefault(); // prevent default link behavior
      collegeModal.show();
    });
  }

  // Initialize Apply Project modal logic (subdomain/project)
  initCollegeProjectModal();
});
 
 
    // ---- CONFIG ----
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx7__du5Y5mRp2iUNeiaDrS0ErF-ThnCep-4O7ArH0KNUdE_l0gOsluGSmqTz2wjxx0/exec"; // ← replace with your deployed web app URL

    // ---- Domain/Subdomain/Project options (kept same as yours) ----
    const projectOptions = {
      ai: {
        "Machine Learning": ["Fake News Detection", "Game Agent AI"],
        "Computer Vision": ["Emotion Recognition", "Healthcare Chatbot"]
      },
      data: {
        "Analytics": ["Customer Sentiment", "Climate Modeling"],
        "Prediction": ["Stock Market Prediction", "E-Learning Dropout"]
      },
      web: {
        "E-Commerce": ["Shopping Platform"],
        "Healthcare": ["Appointment Booking", "Online Exam Proctor"]
      },
      cyber: {
        "Blockchain": ["Supply Chain Tracking", "Secure Identity Verification"],
        "Security": ["Phishing Detection", "Intrusion Detection"]
      },
      iot: {
        "Smart Home": ["IoT-Based Smart Home Automation"],
        "Smart Cities": ["Smart Waste Management System", "IoT for Traffic Control"],
        "Agriculture": ["IoT for Precision Agriculture"],
        "Healthcare": ["Wearable Health Monitoring Device"]
      },
      cloud: {
        "Cloud Applications": ["Serverless Cloud Application"],
        "Infrastructure": ["Load Balancing in Cloud Data Centers", "Cloud Disaster Recovery"],
        "Security": ["Cloud Security using Homomorphic Encryption"],
        "Optimization": ["AI for Cloud Resource Optimization"]
      },
      arvr: {
        "Education & Training": ["AR-Based Educational Learning App", "VR-Based Emergency Response Training"],
        "Healthcare": ["VR Therapy for Anxiety Disorders"],
        "Robotics & Vision": ["Robotic Arm with Computer Vision"],
        "Navigation": ["AR for Museum Navigation"]
      }
    };

    // ---- helpers ----
    function $(id) { return document.getElementById(id); }

    // ---- init modal domain/subdomain/project UI ----
    function initCollegeProjectModal() {
      const domainSelect = $("domain");
      const subDomainSelect = $("subDomain");
      const projectSelect = $("projectTitle");
      const subDomainSection = $("subDomainSection");
      const projectSection = $("projectSection");

      function resetSubProject() {
        subDomainSelect.innerHTML = '<option value="">Choose sub-domain...</option>';
        projectSelect.innerHTML = '<option value="">Choose project...</option>';
        subDomainSection.classList.add("d-none");
        projectSection.classList.add("d-none");
        subDomainSelect.required = false;
        projectSelect.required = false;
      }

      domainSelect.addEventListener("change", function () {
        const domain = this.value;
        resetSubProject();
        if (domain && projectOptions[domain]) {
          Object.keys(projectOptions[domain]).forEach(sub => {
            const opt = document.createElement("option");
            opt.value = sub;
            opt.textContent = sub;
            subDomainSelect.appendChild(opt);
          });
          subDomainSection.classList.remove("d-none");
          subDomainSelect.required = true;
        }
      });

      subDomainSelect.addEventListener("change", function () {
        const domain = domainSelect.value;
        const sub = this.value;
        projectSelect.innerHTML = '<option value="">Choose project...</option>';
        if (domain && sub && projectOptions[domain][sub]) {
          projectOptions[domain][sub].forEach(p => {
            const opt = document.createElement("option");
            opt.value = p;
            opt.textContent = p;
            projectSelect.appendChild(opt);
          });
          projectSection.classList.remove("d-none");
          projectSelect.required = true;
        } else {
          projectSection.classList.add("d-none");
          projectSelect.required = false;
        }
      });

      const applyModalEl = document.getElementById("applyProjectModal");
      applyModalEl.addEventListener('show.bs.modal', function () {
        resetSubProject();
        domainSelect.value = "";
      });
    }

    // ---- form submit (action=add) ----
    function initProjectForm() {
      const form = $("projectForm");
      if (!form) return;

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // basic validation: check required
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }

        const body = new URLSearchParams(new FormData(form));
        body.append("action", "add");

        try {
          const res = await fetch(SCRIPT_URL, { method: "POST", body });
          const text = await res.text();
          if (text.trim() === "Added") {
            Swal.fire({ icon: "success", title: "Submitted!", text: "Application saved successfully!", timer: 1600, showConfirmButton: false });
            form.reset();
            // close modal
            const modalEl = document.getElementById("applyProjectModal");
            const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
            modalInstance.hide();
            loadApplications();
          } else {
            Swal.fire("Error", `Server: ${text}`, "error");
          }
        } catch (err) {
          console.error("Submit error:", err);
          Swal.fire("Error", "Submission failed. Check console/network.", "error");
        }
      });
    }

    // ---- load table from sheet ----
    async function loadApplications() {
      try {
        const res = await fetch(SCRIPT_URL);
        const data = await res.json();
        const tbody = $("tableBody");
        tbody.innerHTML = "";

        data.forEach((row, i) => {
          const status = row["Status"] || "Pending";
          const badgeClass = status === "Approved" ? "success" : (status === "Declined" ? "danger" : "warning");
          const domainText = row["Domain"] || row["domain"] || "";
          const subDomainText = row["Sub Domain"] || row["subDomain"] || "";
          const projectText = row["Project"] || row["projectTitle"] || "";

          tbody.insertAdjacentHTML("beforeend", `
            <tr>
              <td>${i + 1}</td>
              <td>${row["full-name"] || ""}</td>
              <td>${row["Email"] || ""}</td>
              <td>${row["Mobile"] || ""}</td>
              <td>${row["College"] || ""}</td>
              <td>${row["Course"] || ""}</td>
              <td>${domainText}</td>
              <td>${subDomainText}</td>
              <td>${projectText}</td>
              <td><span class="badge bg-${badgeClass}">${status}</span></td>
              <td>
                <button class="btn btn-success btn-sm" onclick="updateStatus(${row.index}, 'Approved')">Approve</button>
                <button class="btn btn-danger btn-sm" onclick="updateStatus(${row.index}, 'Declined')">Decline</button>
                <button class="btn btn-outline-danger btn-sm" onclick="deleteRow(${row.index})">Delete</button>
              </td>
            </tr>
          `);
        });
      } catch (err) {
        
      }
    }

    // ---- update status via POST (action=update) ----
    async function updateStatus(index, status) {
      try {
        const body = new URLSearchParams({ action: "update", index, status });
        const res = await fetch(SCRIPT_URL, { method: "POST", body });
        const text = await res.text();
        if (text.trim() === "Updated") {
          Swal.fire({ icon: "success", title: "Updated", text: `Status set to ${status}`, timer: 1200, showConfirmButton: false });
        } else {
          Swal.fire("Error", `Server: ${text}`, "error");
        }
      } catch (err) {
        console.error("updateStatus error:", err);
        Swal.fire("Error", "Update failed.", "error");
      } finally {
        loadApplications();
      }
    }

    // ---- delete via POST (action=delete) ----
    async function deleteRow(index) {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "This record will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
      });
      if (!confirm.isConfirmed) return;

      try {
        const body = new URLSearchParams({ action: "delete", index });
        const res = await fetch(SCRIPT_URL, { method: "POST", body });
        const text = await res.text();
        if (text.trim() === "Deleted") {
          Swal.fire({ icon: "success", title: "Deleted", timer: 1000, showConfirmButton: false });
        } else {
          Swal.fire("Error", `Server: ${text}`, "error");
        }
      } catch (err) {
        console.error("deleteRow error:", err);
        Swal.fire("Error", "Delete failed.", "error");
      } finally {
        loadApplications();
      }
    }

    // ---- init on DOMContentLoaded ----
    document.addEventListener("DOMContentLoaded", () => {
      initCollegeProjectModal();
      initProjectForm();
      loadApplications();
    });  

    


    /* Course Download Modal Script */
// app.js

// ✅ Load modals dynamically first
document.addEventListener("DOMContentLoaded", async () => {
  const modalContainer = document.getElementById("modals-container");
  if (modalContainer) {
    try {
      const modalsResponse = await fetch("modals.html");
      modalContainer.innerHTML = await modalsResponse.text();
    } catch (error) {
      console.error("Error loading modals:", error);
    }
  }

  // ✅ Initialize app and table once DOM and modals are ready
  initializeApp();
  loadCourseTable();
});

function initializeApp() {
  // ✅ Course list by category
  const categoryCourses = {
    "Job Oriented Courses": [
      "Full Stack (MERN)", "Full Stack (MEAN)", "DevOps with AWS", "Cybersecurity",
      "Artificial Intelligence", "Data Science", "Data Analytics"
    ],
    "Professional Courses": [
      "MEAN / MERN Stack", "UI Development", "AWS / Azure / GCP", "DevOps", "Cyber Security",
      "Data Science", "Digital Marketing", "AI / Machine Learning", "Python Training",
      "Graphic Designing", "Software Testing", "Game Development", "Data Analytics", "Database",
      "C / C++", "Java", "Advance Java", "Excel Training", "React Training", "React Native",
      "SAP Training", ".Net Training", "Aptitude Training", "Android Training",
      "Angular Training", "Node.js Training", "Automation Training"
    ],
    "Junior Geeks": [
      "Basic Artificial Intelligence", "Python", "Java Programming", "Web Development",
      "Basic Computer", "Graphic Designing", "MS Office", "Mobile App Development",
      "Game Development", "Robotics", "Animation", "Cyber Safety"
    ],
    "Computer Science (XI - XII)": ["Python(CBSE Board)", "Java(ICSE Board)"],
  };

  // ✅ Web App URL
  window.webAppUrl = "https://script.google.com/macros/s/AKfycbxqpdzBC_zCV8Ubn_lhr1gZCAYdFfknCGdES9DQy4lcsVi21y6nm0UAdIFilzdkDWPq-g/exec";

  // ✅ Category change handler
  const categorySelect = document.getElementById("category");
  const courseSelect = document.getElementById("courseName");

  if (categorySelect && courseSelect) {
    categorySelect.addEventListener("change", function () {
      const selected = this.value;
      courseSelect.innerHTML = "<option value=''>Select...</option>";
      if (categoryCourses[selected]) {
        categoryCourses[selected].forEach(c => {
          const opt = document.createElement("option");
          opt.value = c;
          opt.textContent = c;
          courseSelect.appendChild(opt);
        });
      }
    });
  }
}

/* ✅ Load course data into table */
async function loadCourseTable() {
  const tableBody = document.getElementById("courseTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "<tr><td colspan='5' class='text-center text-muted'>Loading...</td></tr>";

  try {
    const response = await fetch(`${window.webAppUrl}?action=getAllCourses`);
    const data = await response.json();

    if (!data.success || !data.records || data.records.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='5' class='text-center text-muted'>No uploaded data yet.</td></tr>";
      return;
    }

    tableBody.innerHTML = "";
    data.records.forEach(r => {
      const Category = r.Category || "Unknown";
      const Course = r.Course || "Unknown";
      const Type = r.Type || "-";
      const FileName = r.FileName || r["File Name"] || "Unnamed File";
      const URL = r.URL || "#";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${Category}</td>
        <td>${Course}</td>
        <td>${Type}</td>
        <td>${FileName}</td>
        <td><a href="${URL}" target="_blank" class="btn btn-sm btn-primary">View</a></td>
      `;
      tableBody.appendChild(row);
    });
  } catch (err) {
    console.error("Error loading courses:", err);
    tableBody.innerHTML = `<tr><td colspan='5' class='text-center text-danger'>Error loading: ${err.message}</td></tr>`;
  }
}
