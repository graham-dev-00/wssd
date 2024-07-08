import { enumize } from 'src/shares/enums/enumize';

export const KafkaTopics = enumize('matching_engine_output');
export const KafkaGroups = enumize('matching_engine_saver_images');

export const KafkaDailyReportTopic = 'daily_report';
export const KafkaDailyReportGroup = 'daily_report_group';
export const KafkaCBTTopic = 'slack_cpt';
export const KafkaCBTGroup = 'slack_cpt_group';
