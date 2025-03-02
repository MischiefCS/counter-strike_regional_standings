### Roster Details<br />
Team Name: Boring Players<br />
Roster: Jun7, Mystic, s1ayer, tutu, zdr<br />
Global Rank: [487](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [75]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  507.0<br />
<br />
Final Rank Value (507.0) = Starting Rank Value (505.2) + Head To Head Adjustments (1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.2
- 400 + ( ( 0.053 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 505.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      538 | 2025-02-07 | Harizma                   | L   | 1.000      | -            | -                | -                | -         |    -6.08 | Jun7, Mystic, s1ayer, tutu, zdr |
|           11 |      848 | 2025-01-02 | LaiShanHui                | L   | 0.812      | -            | -                | -                | -         |   -17.17 | Jun7, Mystic, s1ayer, tutu, zdr |
|           10 |      849 | 2025-01-02 | Just Swing (Chinese team) | W   | 0.811      | 0.143        | 0.005 (0.001)    | 0.425 (0.049)    | 0 (0.000) |    18.66 | Jun7, Mystic, s1ayer, tutu, zdr |
|            9 |      856 | 2024-12-31 | Shika                     | L   | 0.798      | -            | -                | -                | -         |   -11.25 | Jun7, Mystic, s1ayer, tutu, zdr |
|            8 |      866 | 2024-12-30 | Loveset                   | W   | 0.792      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.39 | Jun7, Mystic, s1ayer, tutu, zdr |
|            7 |     1759 | 2024-12-05 | Never Say Never-          | L   | 0.625      | -            | -                | -                | -         |    -7.22 | Jun7, karl, Mystic, s1ayer, zdr |
|            6 |     1820 | 2024-12-04 | DryPeekGaming             | W   | 0.618      | 0.250        | 0.000 (0.000)    | 0.031 (0.005)    | 0 (0.000) |     6.84 | Jun7, karl, Mystic, s1ayer, zdr |
|            5 |     1867 | 2024-12-03 | MAG10                     | W   | 0.612      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.70 | Jun7, karl, Mystic, s1ayer, zdr |
|            4 |     2027 | 2024-12-01 | Nalakuvara Gaming         | L   | 0.599      | -            | -                | -                | -         |    -6.15 | Jun7, karl, Mystic, s1ayer, zdr |
|            3 |     2262 | 2024-11-27 | Lynn Vision Gaming        | L   | 0.571      | -            | -                | -                | -         |    -2.88 | Jun7, Mystic, s1ayer, tutu, zdr |
|            2 |     2321 | 2024-11-25 | Rare Atom                 | L   | 0.563      | -            | -                | -                | -         |    -1.37 | Jun7, Mystic, s1ayer, tutu, zdr |
|            1 |     2323 | 2024-11-25 | Ex-GR Gaming              | W   | 0.563      | 0.143        | 0.011 (0.001)    | 0.112 (0.009)    | 0 (0.000) |    13.32 | Jun7, Mystic, s1ayer, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
