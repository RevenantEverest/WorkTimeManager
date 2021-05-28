DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS billing_period;
DROP TABLE IF EXISTS billing_period_records;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    name VARCHAR(255),
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP
);

CREATE TABLE billing_periods (
    id SERIAL PRIMARY KEY,
    project_id BIGINT,
    start_date TIMESTAMP,
    end_date TIMESTAMP
);

CREATE TABLE billing_period_records (
    id SERIAL PRIMARY KEY,
    billing_period_id BIGINT,
    title VARCHAR(255),
    description TEXT,
    time_start TIMESTAMPTZ,
    time_end TIMESTAMPTZ
);