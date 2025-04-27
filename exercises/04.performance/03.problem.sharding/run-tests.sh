VITEST_MAX_FORKS=5 npx vitest run --reporter=blob --shard=1/4 & \
VITEST_MAX_FORKS=5 npx vitest run --reporter=blob --shard=2/4 & \
VITEST_MAX_FORKS=5 npx vitest run --reporter=blob --shard=3/4 & \
VITEST_MAX_FORKS=5 npx vitest run --reporter=blob --shard=4/4 & \
wait
npx vitest run --merge-reports
