SQL insert data: 
use wssd;

DELIMITER $$

CREATE PROCEDURE insert_records()
BEGIN
    DECLARE batch_size INT DEFAULT 100000; 
    DECLARE total_records INT DEFAULT 100000000;
    DECLARE loops INT DEFAULT total_records / batch_size;
    DECLARE i INT DEFAULT 1;
    DECLARE start_id INT DEFAULT 50000021;

    WHILE i <= loops DO
        INSERT INTO transactions (id, fromUserWallet, toUserWallet, quantity, status, nonce, createdAt, updatedAt)
        SELECT 
            start_id + (i - 1) * batch_size + s.id - 1,
            FLOOR(RAND() * 100) + 1,
            FLOOR(RAND() * 100) + 1,
            ROUND(RAND() * 1000, 2),
            CASE 
                WHEN RAND() < 0.5 THEN 'completed' 
                ELSE 'pending' 
            END,
            LEFT(MD5(RAND()), 12),
            NOW() - INTERVAL FLOOR(RAND() * 365) DAY,
            NOW() - INTERVAL FLOOR(RAND() * 365) DAY
        FROM (
            SELECT @row := @row + 1 AS id
            FROM (SELECT 0 UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) t1,
                 (SELECT 0 UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) t2,
                 (SELECT 0 UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) t3,
                 (SELECT 0 UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) t4,
                 (SELECT @row := 0) t5
            LIMIT batch_size
        ) s;

        SET i = i + 1;
    END WHILE;
END$$

DELIMITER ;

-- Gọi procedure
CALL insert_records();
