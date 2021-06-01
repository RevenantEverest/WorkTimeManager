DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS billing_periods;
DROP TABLE IF EXISTS billing_period_records;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    name VARCHAR(255),
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMPTZ
);

CREATE TABLE billing_periods (
    id SERIAL PRIMARY KEY,
    project_id BIGINT,
    start_date TIMESTAMPTZ,
    end_date TIMESTAMPTZ
);

CREATE TABLE billing_period_records (
    id SERIAL PRIMARY KEY,
    billing_period_id BIGINT,
    title VARCHAR(255),
    description TEXT,
    time_start TIMESTAMPTZ,
    time_end TIMESTAMPTZ
);