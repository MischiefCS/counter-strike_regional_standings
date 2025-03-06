### Roster Details<br />
Team Name: Bad News Capybaras<br />
Roster: cbass, Gabe, Grave, jchancE, LaffyTs<br />
Global Rank: [124](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [36]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  475.0<br />
<br />
Final Rank Value (475.0) = Starting Rank Value (487.2) + Head To Head Adjustments (-12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.146[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.2
- 400 + ( ( 0.038 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 487.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      394 | 2025-02-09 | MCS Gaming           | L   | 0.446      | -            | -                | -                | -         |    -6.13 | cbass, Gabe, Grave, jchancE, LaffyTs |
|           10 |      442 | 2025-02-08 | M80                  | L   | 0.439      | -            | -                | -                | -         |    -6.36 | cbass, Gabe, Grave, jchancE, LaffyTs |
|            9 |      836 | 2024-12-15 | Alter Iron Club      | L   | 0.074      | -            | -                | -                | -         |    -0.72 | cbass, Champ, Grave, jchancE, z0mb1e |
|            8 |      860 | 2024-12-14 | Undone               | L   | 0.067      | -            | -                | -                | -         |    -0.67 | cbass, Champ, Grave, jchancE, z0mb1e |
|            7 |      888 | 2024-12-13 | LAG Gaming           | W   | 0.061      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.72 | cbass, Champ, Grave, jchancE, z0mb1e |
|            6 |      907 | 2024-12-12 | Chicken Coop Esports | W   | 0.054      | 0.143        | 0.001 (0.000)    | 0.080 (0.001)    | 0 (0.000) |     0.98 | cbass, Champ, Grave, jchancE, z0mb1e |
|            5 |      922 | 2024-12-11 | Undone               | L   | 0.047      | -            | -                | -                | -         |    -0.47 | cbass, Champ, Grave, jchancE, z0mb1e |
|            4 |      934 | 2024-12-10 | Chicken Coop Esports | W   | 0.041      | 0.143        | 0.001 (0.000)    | 0.080 (0.000)    | 0 (0.000) |     0.74 | cbass, Champ, Grave, jchancE, z0mb1e |
|            3 |      978 | 2024-12-07 | FLUFFY AIMERS        | L   | 0.020      | -            | -                | -                | -         |    -0.38 | cbass, Champ, Grave, jchancE, z0mb1e |
|            2 |      982 | 2024-12-07 | Sharks Esports       | L   | 0.019      | -            | -                | -                | -         |    -0.09 | cbass, Champ, Grave, jchancE, z0mb1e |
|            1 |     1008 | 2024-12-06 | Not Mythic           | W   | 0.013      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.013) |     0.16 | cbass, Champ, Grave, jchancE, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
