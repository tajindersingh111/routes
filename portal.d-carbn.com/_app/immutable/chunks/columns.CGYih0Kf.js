import "./public.DoyVH2H6.js";
import {
    d,
    a as i
} from "./format.wp9OkogO.js";
const r = [{
        id: "id",
        label: "Id",
        hidden: !0
    }, {
        id: "name",
        label: "Name"
    }],
    n = [{
        id: "id",
        label: "Id",
        hidden: !0
    }, {
        id: "name",
        label: "Name"
    }, {
        id: "email",
        label: "Email"
    }, {
        id: "status",
        label: "Status"
    }, {
        id: "address",
        label: "Address",
        hidden: !0
    }, {
        id: "postcode",
        label: "Postcode",
        hidden: !0
    }, {
        id: "vehicle_end_day_at_depot",
        label: "Vehicle End Day At Depot",
        hidden: !0
    }, {
        id: "main_contact_name",
        label: "Main Contact Name",
        hidden: !0
    }, {
        id: "job_title",
        label: "Job title",
        hidden: !0
    }, {
        id: "phone_number",
        label: "Phone Number",
        hidden: !0
    }, {
        id: "address_line_1",
        label: "Address Line 1",
        hidden: !0
    }, {
        id: "town_or_city",
        label: "Town or City",
        hidden: !0
    }, {
        id: "county",
        label: "County",
        hidden: !0
    }, {
        id: "billing_address",
        label: "Billing Address",
        hidden: !0
    }, {
        id: "billing_address_line_1",
        label: "Billing Address line 1",
        hidden: !0
    }, {
        id: "billing_town_or_city",
        label: "Billing Town or City",
        hidden: !0
    }, {
        id: "billing_postcode",
        label: "Billing Postcode",
        hidden: !0
    }, {
        id: "billing_county",
        label: "Billing County",
        hidden: !0
    }, {
        id: "created_at",
        label: "Created At",
        hidden: !0
    }, {
        id: "updated_at",
        label: "Updated At",
        hidden: !0
    }],
    o = [{
        id: "id",
        label: "Id",
        hidden: !0
    }, {
        id: "name",
        label: "Name"
    }, {
        id: "company",
        label: "Company",
        formatter: e => e.company.name
    }, {
        id: "job_title",
        label: "Job Title"
    }, {
        id: "email",
        label: "Email",
        hidden: !0
    }, {
        id: "status",
        label: "Status"
    }, {
        id: "address",
        label: "Address",
        hidden: !0
    }, {
        id: "postcode",
        label: "Postcode",
        hidden: !0
    }],
    u = [{
        id: "id",
        label: "Id",
        hidden: !0
    }, {
        id: "created_at",
        label: "Created At",
        hidden: !0
    }, {
        id: "updated_at",
        label: "Updated At",
        hidden: !0
    }, {
        id: "company",
        label: "Company",
        formatter: e => e.company.name
    }, {
        id: "name",
        label: "Name"
    }, {
        id: "address",
        label: "Address"
    }, {
        id: "address_line_1",
        label: "Address Line 1",
        hidden: !0
    }, {
        id: "postcode",
        label: "Postcode",
        hidden: !0
    }, {
        id: "town_or_city",
        label: "Town or City",
        hidden: !0
    }, {
        id: "county",
        label: "County"
    }, {
        id: "longitude",
        label: "Longitude",
        hidden: !0
    }, {
        id: "latitude",
        label: "Latitude",
        hidden: !0
    }],
    s = [{
        id: "id",
        label: "Id",
        hidden: !0
    }, {
        id: "created_at",
        label: "Created At",
        hidden: !0
    }, {
        id: "updated_at",
        label: "Updated At",
        hidden: !0
    }, {
        id: "registration_reference",
        label: "Registration Reference"
    }, {
        id: "company",
        label: "Company",
        formatter: e => e.company.name
    }, {
        id: "vehicle_type",
        label: "Vehicle Type"
    }, {
        id: "vehicle_model",
        label: "Vehicle Model",
        hidden: !0
    }, {
        id: "vehicle_model_ext",
        label: "Vehicle Model Ext",
        hidden: !0
    }, {
        id: "gear_shift",
        label: "Gear Shift",
        hidden: !0
    }, {
        id: "driving_wheel",
        label: "Driving Wheel",
        hidden: !0
    }, {
        id: "country_text",
        label: "Country Text",
        hidden: !0
    }, {
        id: "registered",
        label: "Registered",
        hidden: !0
    }, {
        id: "delivery_service_provider",
        label: "Delivery service provider",
        hidden: !0,
        formatter: e => {
            var t;
            return ((t = e.delivery_service_provider) == null ? void 0 : t.job_title) ? ? "Empty"
        }
    }, {
        id: "depot",
        label: "Depot",
        hidden: !0,
        formatter: e => e.depot.name
    }, {
        id: "dvla_data_retrieved_at",
        label: "DVLA Retrieved At",
        formatter: e => e.dvla_data_retrieved_at ? d(e.dvla_data_retrieved_at) : ""
    }, {
        id: "dvla_error",
        label: "Dvla error",
        hidden: !0
    }, {
        id: "dvla_error_at",
        label: "DVLA Error At",
        formatter: e => e.dvla_error_at ? d(e.dvla_error_at) : ""
    }, {
        id: "make",
        label: "Make",
        hidden: !0
    }, {
        id: "fuel_type",
        label: "Fuel Type",
        hidden: !0
    }, {
        id: "year_of_manufacture",
        label: "Year of Manufacture",
        hidden: !0
    }, {
        id: "month_of_first_registration",
        label: "Month of First Registration",
        hidden: !0
    }, {
        id: "month_of_first_dvla_registration",
        label: "Month of First DVLA Registration",
        hidden: !0
    }, {
        id: "engine_capacity",
        label: "Engine Capacity",
        hidden: !0
    }, {
        id: "revenue_weight",
        label: "Revenue Weight",
        hidden: !0
    }, {
        id: "co2_emission_g_per_km",
        label: "CO₂ Emission G Per KM",
        hidden: !0
    }, {
        id: "colour",
        label: "Colour",
        hidden: !0
    }, {
        id: "approval_type",
        label: "Approval Type",
        hidden: !0
    }, {
        id: "tax_status",
        label: "Tax Status",
        hidden: !0
    }, {
        id: "mot_status",
        label: "Mot Status",
        hidden: !0
    }, {
        id: "euro_status",
        label: "Euro Status",
        hidden: !0
    }, {
        id: "real_driving_emissions",
        label: "Real Driving Emissions",
        hidden: !0
    }, {
        id: "date_of_last_v5c_issued",
        label: "Date of Last v5c Issued",
        hidden: !0
    }, {
        id: "wheel_plan",
        label: "Wheel Plan",
        hidden: !0
    }, {
        id: "tax_due_date",
        label: "Tax Due Date",
        hidden: !0
    }, {
        id: "mot_expiry_date",
        label: "Mot Expiry Eate",
        hidden: !0
    }, {
        id: "marked_for_export",
        label: "Marked for Export",
        hidden: !0
    }, {
        id: "additional_rate_of_tax_end_date",
        label: "Additional Rate of Tax End Date",
        hidden: !0
    }, {
        id: "automated_vehicle",
        label: "Automated Vehicle",
        hidden: !0
    }],
    _ = [{
        id: "id",
        label: "Id",
        hidden: !0
    }, {
        id: "mileage",
        label: "Mileage"
    }, {
        id: "date_time",
        label: "Date Time",
        formatter: e => e.date_time == null ? i(e.date) : d(e.date_time)
    }, {
        id: "created_at",
        label: "Created At",
        hidden: !0
    }, {
        id: "updated_at",
        label: "Updated At",
        hidden: !0
    }],
    b = [{
        id: "id",
        label: "Id",
        hidden: !0
    }, {
        id: "customer_name",
        label: "Customer Name",
        hidden: !0
    }, {
        id: "county",
        label: "County",
        hidden: !0
    }, {
        id: "postcode",
        label: "Postcode"
    }, {
        id: "longitude",
        label: "Longitude",
        hidden: !0
    }, {
        id: "latitude",
        label: "Latitude",
        hidden: !0
    }, {
        id: "post_tag_longitude",
        label: "Post Tag Longitude",
        hidden: !0
    }, {
        id: "post_tag_latitude",
        label: "Post Tag Latitude",
        hidden: !0
    }, {
        id: "parcels_delivered",
        label: "Parcels Delivered",
        hidden: !0
    }, {
        id: "parcels_collected",
        label: "Parcels Collected",
        hidden: !0
    }, {
        id: "parcels_undelivered",
        label: "Parcels Undelivered",
        hidden: !0
    }, {
        id: "parcels_uncollected",
        label: "Parcels Uncollected",
        hidden: !0
    }, {
        id: "parcel_weight",
        label: "Parcel Weight",
        hidden: !0
    }, {
        id: "parcels_sizes",
        label: "Parcels Sizes",
        hidden: !0
    }, {
        id: "sequence",
        label: "Sequence"
    }, {
        id: "planned_or_actual",
        label: "Planned or Actual",
        hidden: !0
    }, {
        id: "mileage",
        label: "Mileage"
    }, {
        id: "date_time",
        label: "Date Time",
        formatter: e => e.date_time == null ? i(e.date) : d(e.date_time)
    }, {
        id: "created_at",
        label: "Created At",
        hidden: !0
    }, {
        id: "updated_at",
        label: "Updated At",
        hidden: !0
    }];
export {
    u as a, n as c, o as d, _ as m, r, b as s, s as v
};