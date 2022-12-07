// backend type assumption
type Personal = {
  staff: {
    department: string;
    staffTitle: string;
    staffFirstName: string;
    staffMiddleName: string;
    staffLastName: string;
    staffEmail: string;
    staffPhone: string;
    staffAliases: {
      department: string;
      staffTitle: string;
      staffFirstName: string;
      staffLastName: string;
    };
  };
  managers: {
    department: string;
    managerTitle: string;
    managerFirstName: string;
    managerMiddleName: string;
    managerLastName: string;
    managerEmail: string;
    managerPhone: string;
    managerAliases: {
      department: string;
      managerTitle: string;
      managerFirstName: string;
      managerLastName: string;
    };
  };
};

// inline lookup Type: Personal["managers"]["managerAliases"]
const salesManager: Personal["managers"]["managerAliases"] = {
  department: "Sales",
  managerTitle: "Regional Manager",
  managerFirstName: "Tom",
  managerLastName: "Brown",
};

const salesStaff: Personal["staff"]["staffAliases"] = {
  department: "Sales",
  staffTitle: "Lead Regional Salesperson",
  staffFirstName: "Karen",
  staffLastName: "Smith",
};

// gather for UI
// inline lookup Type: Personal["managers"]["managerAliases"]
function getDeptManager(): Personal["managers"]["managerAliases"] {
  return salesManager;
}

function getDeptStaff(): Personal["staff"]["staffAliases"] {
  return salesStaff;
}

console.log(`${getDeptManager().managerFirstName} ${getDeptManager().managerLastName} is ${getDeptManager().managerTitle} of ${getDeptManager().department}.`);
console.log(`${getDeptStaff().staffFirstName} ${getDeptStaff().staffLastName} is ${getDeptStaff().staffTitle} in ${getDeptStaff().department}`);
