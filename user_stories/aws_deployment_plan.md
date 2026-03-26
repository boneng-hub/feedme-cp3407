# AWS Deployment Plan (EC2 + RDS)

This plan maps FeedMe implementation to cloud service requirements.

## 1. Target Architecture

1. Frontend static files served by Express on EC2 (single instance baseline).
2. Backend API hosted in the same Node.js process on EC2.
3. MySQL moved from local machine to Amazon RDS (MySQL).
4. Security Group rules limit database access to EC2 security group only.

## 2. Services Used

1. Amazon EC2: Node.js runtime host
2. Amazon RDS (MySQL): managed relational database
3. Amazon S3 (optional): store screenshots/evidence and future uploads
4. AWS CloudWatch (optional): basic logs and health monitoring

## 3. Deployment Steps

### Step A: Provision RDS

1. Create MySQL RDS instance.
2. Create database feedme.
3. Import schema and seed data.
4. Record endpoint, port, username, password.

### Step B: Provision EC2

1. Launch Ubuntu EC2 instance.
2. Install Node.js LTS and npm.
3. Clone repository and install dependencies.
4. Create environment variables for DB config and JWT secret.
5. Run backend with process manager (pm2 recommended).

### Step C: Network and Security

1. EC2 Security Group:
   - Allow inbound 80/443 for web access.
   - Allow inbound 22 only from trusted IP.
2. RDS Security Group:
   - Allow inbound 3306 only from EC2 Security Group.

### Step D: Health Verification

1. Open /api/health from public endpoint.
2. Perform end-to-end flow: register -> login -> order -> my-orders.
3. Confirm RDS tables update correctly.

## 4. Required Code/Config Follow-ups

1. DB credentials and JWT secret are environment-variable ready in backend.
2. PM2 startup configuration is implemented (`backend/ecosystem.config.cjs`).
3. Remaining: optional reverse proxy (Nginx) for domain/HTTPS.
4. Remaining: optional SSL certificate integration.
5. Remaining: run final EC2 + RDS deployment and capture evidence screenshots.

## 5. Evidence for Assessment

1. Screenshot of EC2 instance and running service.
2. Screenshot of RDS instance and connectivity.
3. API health check output from cloud URL.
4. End-to-end demo recording in cloud environment.
