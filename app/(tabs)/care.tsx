import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Text, 
  Card, 
  useTheme,
  Chip,
  ProgressBar
} from 'react-native-paper';
import { Heart, Thermometer, Activity, Clock } from 'lucide-react-native';

export default function CareScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>
            Pet Care
          </Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
            Monitor your pet's health and wellness
          </Text>
        </View>

        {/* Health Stats */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Health Overview
          </Text>
          
          <Card style={styles.healthCard}>
            <Card.Content>
              <View style={styles.healthStat}>
                <View style={styles.statHeader}>
                  <Heart size={20} color={theme.colors.error} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, marginLeft: 8 }}>
                    Heart Rate
                  </Text>
                </View>
                <Text variant="headlineSmall" style={{ color: theme.colors.onSurface }}>
                  85 BPM
                </Text>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.tertiary, alignSelf: 'flex-start' }}
                  textStyle={{ color: theme.colors.onTertiary }}
                >
                  Normal
                </Chip>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.healthCard}>
            <Card.Content>
              <View style={styles.healthStat}>
                <View style={styles.statHeader}>
                  <Thermometer size={20} color={theme.colors.primary} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, marginLeft: 8 }}>
                    Temperature
                  </Text>
                </View>
                <Text variant="headlineSmall" style={{ color: theme.colors.onSurface }}>
                  101.5°F
                </Text>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.tertiary, alignSelf: 'flex-start' }}
                  textStyle={{ color: theme.colors.onTertiary }}
                >
                  Normal
                </Chip>
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.healthCard}>
            <Card.Content>
              <View style={styles.healthStat}>
                <View style={styles.statHeader}>
                  <Activity size={20} color={theme.colors.secondary} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, marginLeft: 8 }}>
                    Activity Level
                  </Text>
                </View>
                <Text variant="headlineSmall" style={{ color: theme.colors.onSurface }}>
                  75%
                </Text>
                <ProgressBar 
                  progress={0.75} 
                  color={theme.colors.secondary}
                  style={styles.progressBar}
                />
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* Daily Goals */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Daily Goals
          </Text>
          
          <Card style={styles.goalCard}>
            <Card.Content>
              <View style={styles.goalItem}>
                <View style={styles.goalHeader}>
                  <Clock size={18} color={theme.colors.primary} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, marginLeft: 8 }}>
                    Exercise Time
                  </Text>
                </View>
                <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                  45 min / 60 min goal
                </Text>
                <ProgressBar 
                  progress={0.75} 
                  color={theme.colors.primary}
                  style={styles.progressBar}
                />
              </View>
            </Card.Content>
          </Card>

          <Card style={styles.goalCard}>
            <Card.Content>
              <View style={styles.goalItem}>
                <View style={styles.goalHeader}>
                  <Heart size={18} color={theme.colors.secondary} />
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, marginLeft: 8 }}>
                    Playtime
                  </Text>
                </View>
                <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                  20 min / 30 min goal
                </Text>
                <ProgressBar 
                  progress={0.67} 
                  color={theme.colors.secondary}
                  style={styles.progressBar}
                />
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* Recent Health Notes */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Health Notes
          </Text>
          
          <Card style={styles.noteCard}>
            <Card.Content>
              <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                Vet checkup completed
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                All vaccinations up to date. Next appointment: March 15, 2024
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, marginTop: 4 }}>
                2 days ago
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.noteCard}>
            <Card.Content>
              <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                Dental cleaning scheduled
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                Professional dental cleaning booked for next week
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, marginTop: 4 }}>
                5 days ago
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginBottom: 12,
    fontWeight: '600',
  },
  healthCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    elevation: 1,
    borderRadius: 12,
  },
  healthStat: {
    gap: 8,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    marginTop: 4,
  },
  goalCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    elevation: 1,
    borderRadius: 12,
  },
  goalItem: {
    gap: 4,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    elevation: 1,
    borderRadius: 12,
  },
});