### Roster Details<br />
Team Name: Chill Guys<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [183](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [54]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  585.3<br />
<br />
Final Rank Value (585.3) = Starting Rank Value (589.5) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.130[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 589.5
- 400 + ( ( 0.092 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 589.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      349 | 2025-02-10 | Exceritus        | L   | 0.827      | -            | -                | -                | -         |   -15.69 | Evan, MagiC, MERL, NIGHT666LADE, TABEN    |
|            6 |      391 | 2025-02-09 | InControl        | W   | 0.819      | 0.143        | 0.000 (0.000)    | 0.066 (0.008)    | 0 (0.000) |    13.03 | Evan, MagiC, MERL, NIGHT666LADE, TABEN    |
|            5 |      424 | 2025-02-08 | Party Astronauts | L   | 0.813      | -            | -                | -                | -         |    -9.45 | Evan, MagiC, MERL, NIGHT666LADE, TABEN    |
|            4 |      440 | 2025-02-08 | Exceritus        | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.200 (0.023)    | 0 (0.000) |     9.12 | Evan, MagiC, MERL, NIGHT666LADE, TABEN    |
|            3 |     1271 | 2024-11-23 | NRG              | L   | 0.300      | -            | -                | -                | -         |    -1.22 | Evan, MagiC, Merl, NIGHT666LADE, TABEN    |
|            2 |     2009 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.000      | 0.477        | 0.001 (0.000)    | 0.099 (0.000)    | 0 (0.000) |     0.01 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN |
|            1 |     2015 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.000      | 0.477        | 0.001 (0.000)    | 0.099 (0.000)    | 0 (0.000) |     0.00 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($116.44)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $1,600.00      | $116.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
