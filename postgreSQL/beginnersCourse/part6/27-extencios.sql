SELECT * FROM pg_available_extensions;

-- install extention
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- generate uuid 
\df

SELECT uuid_generate_v4();

