import React, { useRef, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../App.css";

function Filter({ filter, onFilterChange }) {

    return (
        <div className="filter-container">
            <button className={`filter-btn ${filter === "all" ? "active-filter" : ""}`} onClick={() => onFilterChange("all")}>
                All
            </button>
            <button className={`filter-btn ${filter === "active" ? "active-filter" : ""}`} onClick={() => onFilterChange("active")}>
                Active
            </button>
            <button className={`filter-btn ${filter === "completed" ? "active-filter" : ""}`} onClick={() => onFilterChange("completed")}>
                Completed
            </button>
        </div>
    );
}

export default Filter;