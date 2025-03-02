### Roster Details<br />
Team Name: Team Norway<br />
Roster: Grus, sense, shyyne, SLY, Tapewaare<br />
Global Rank: [316](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [208]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  630.5<br />
<br />
Final Rank Value (630.5) = Starting Rank Value (604.8) + Head To Head Adjustments (25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.8
- 400 + ( ( 0.104 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 604.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2950 | 2024-11-15 | PCIFIC Espor                | W   | 0.492      | 0.617        | 0.004 (0.001)    | 0.279 (0.085)    | 1 (0.492) |    10.65 | Grus, sense, shyyne, SLY, Tapewaare |
|            4 |     2960 | 2024-11-15 | Metizport                   | L   | 0.491      | -            | -                | -                | -         |    -1.06 | Grus, sense, shyyne, SLY, Tapewaare |
|            3 |     2977 | 2024-11-14 | Homyno                      | W   | 0.487      | 0.617        | 0.008 (0.002)    | 0.205 (0.062)    | 1 (0.487) |     9.54 | Grus, sense, shyyne, SLY, Tapewaare |
|            2 |     3054 | 2024-11-13 | Mindfreak (Australian team) | W   | 0.479      | 0.617        | 0.002 (0.001)    | 0.090 (0.026)    | 1 (0.479) |     9.10 | Grus, sense, shyyne, SLY, Tapewaare |
|            1 |     3058 | 2024-11-13 | Los kogutos                 | L   | 0.479      | -            | -                | -                | -         |    -2.49 | Grus, sense, shyyne, SLY, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
